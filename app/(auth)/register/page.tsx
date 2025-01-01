"use client";

import React from "react";
import Image from "next/image";
import AuthForm from "@/ui/auth/authForm";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const handleRegisterSubmit = (data: {
    name?: string;
    email: string;
    password: string;
  }) => {
    console.log("Register data:", data);
  };

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
              width={40}
              height={40}
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Already have account?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <AuthForm type="register" onSubmit={handleRegisterSubmit} />
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

export default RegisterPage;
