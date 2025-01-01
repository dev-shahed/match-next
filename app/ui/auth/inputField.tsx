"use client";
import React, { forwardRef } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, name, error, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={name}
            name={name}
            ref={ref}
            {...props}
            className={`block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
      error ? "ring-red-500 border-red-500" : ""
    }`}
          />

          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
