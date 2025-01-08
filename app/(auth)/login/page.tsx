"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/ui/auth/login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Not a member?{" "}
              <Link
                href="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign up now
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          src="/form-image.png"
          alt="Background"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
