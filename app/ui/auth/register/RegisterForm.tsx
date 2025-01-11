"use client";

import React, { useState } from "react";
import {
  profileSchema,
  RegisterSchema,
  registerSchema,
} from "@/lib/schemas/registerSchema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import UserDetails from "./UserDetails";
import ProfileDetails from "./ProfileDetails";
import { registerUser } from "@/lib/actions/authActions";
import { handleFormServerErrors } from "@/lib/util";

const stepSchemas = [registerSchema, profileSchema];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = stepSchemas[activeStep];

  const registerFormMethods = useForm<RegisterSchema>({
    resolver: zodResolver(currentValidationSchema),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = registerFormMethods;

  const router = useRouter();

  const onSubmit = async () => {
    const result = await registerUser(getValues() as RegisterSchema);
    if (result.status === "success") {
      router.push("/register/success");
    } else {
      handleFormServerErrors(result, setError);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <UserDetails />;
      case 1:
        return <ProfileDetails />;
      default:
        return "Unknown step";
    }
  };

  const onBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onNext = async () => {
    if (activeStep === stepSchemas.length - 1) {
      await onSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <FormProvider {...registerFormMethods}>
      <form onSubmit={handleSubmit(onNext)}>
        <div className="space-y-4">
          {getStepContent(activeStep)}
          {errors.root?.serverError && (
            <p className="text-danger text-sm">
              {errors.root.serverError.message}
            </p>
          )}
          <div className="flex flex-row items-center gap-6">
            {activeStep !== 0 && (
              <Button onClick={onBack} fullWidth>
                Back
              </Button>
            )}
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color="default"
              type="submit"
            >
              {activeStep === stepSchemas.length - 1 ? "Submit" : "Continue"}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
