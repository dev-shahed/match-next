import Link from "next/link";
import React from "react";
import { FcLike } from "react-icons/fc";

const RegistrationSuccess = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 sm:p-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full">
            <FcLike className="w-10 h-10" />
          </div>

          {/* Heading */}
          <h1 className="text-xl font-bold text-purple-800">
            Thank You for Signing Up!
          </h1>
          <p className="mt-4 text-lg text-purple-600">
            Please verify your email address. A confirmation email has been sent
            to your inbox.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md"
            >
              Login Now
            </Link>
            <Link
              href="/"
              className="inline-block bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
