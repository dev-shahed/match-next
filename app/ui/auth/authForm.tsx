"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import InputField from "./inputField";

const authSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .partial({
    name: true, // Make `name` optional by default
  });

// Infer the type for TypeScript
type AuthFormValues = z.infer<typeof authSchema>;

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: AuthFormValues) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(
      type === "register"
        ? authSchema // Require `name` for registration
        : authSchema.omit({ name: true }) // Remove `name` for login
    ),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {type === "register" && (
        <InputField
          label="Name"
          error={errors.name?.message}
          {...register("name")}
        />
      )}
      <InputField
        label="Email address"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <InputField
        label="Password"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {type === "login" ? "Sign in" : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
