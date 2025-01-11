"use client";

import { signInUser } from "@/lib/actions/authActions";
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser({
      email: data.email,
      password: data.password,
    });
    if (result.status === "success") {
      router.push("/discover");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Input
            defaultValue=""
            label="Email"
            variant="bordered"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
          />
          <Input
            defaultValue=""
            label="Password"
            variant="bordered"
            type="password"
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
          <Button fullWidth color="default" type="submit" isDisabled={!isValid}>
            Login
          </Button>
          <SocialLogin />
          <div className="flex justify-center hover:underline text-sm">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
