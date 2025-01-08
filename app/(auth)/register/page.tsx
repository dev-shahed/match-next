import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/ui/auth/register/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          src="/register.svg"
          alt="Background"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
