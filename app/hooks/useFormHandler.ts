"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export function useFormHandler<T extends z.ZodType<unknown>>(schema: T) {
  return useForm({
    resolver: zodResolver(schema),
  });
}
