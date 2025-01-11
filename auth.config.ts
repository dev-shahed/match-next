import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { compare } from "bcryptjs";
import { getUserByEmail } from "@/lib/actions/authActions";
import { loginSchema } from "@/lib/schemas/loginSchema";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(creds) {
        const { email, password } = creds || {};
        if (!email || !password) {
          throw new Error("Invalid email or password");
        }
        const validated = loginSchema.safeParse(creds);
        if (validated.success) {
          const { email, password } = validated.data;
          const user = await getUserByEmail(email);
          if (
            !user ||
            !user.passwordHash ||
            !(await compare(password, user.passwordHash))
          )
            return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthOptions;
