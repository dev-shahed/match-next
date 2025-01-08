import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from "next-auth"
import { PrismaClient, Role } from "@prisma/client"
import { authConfig } from "./auth.config"
const prisma = new PrismaClient()
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      profileComplete: boolean;
      role: Role;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
      async jwt({ user, token }) {
          if (user) {
              token.profileComplete = user.profileComplete;
              token.role = user.role;
          }
          return token;
      },
      async session({ session, token }) {
          if (token.sub && session.user) {
              session.user.id = token.sub;
              session.user.profileComplete = token.profileComplete as boolean;
              session.user.role = token.role as Role;
          }

          return session;
      }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})