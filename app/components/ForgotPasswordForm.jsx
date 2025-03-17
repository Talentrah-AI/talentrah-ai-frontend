"use client";
import * as React from "react";

function ForgotPasswordForm() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 flex-1">
      <div className="w-full max-w-[400px]">
        <h1 className="mb-2 text-2xl font-semibold text-center text-gray-900">
          Forgot password?
        </h1>
        <p className="mb-6 text-sm text-center text-gray-500">
          Enter your email below, and we'll send you a link to reset it.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 w-full font-medium text-white bg-blue-600 rounded-lg duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send link
          </button>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex gap-2 items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="Go back to previous page"
            >
              <span className="text-lg" aria-hidden="true">
                ←
              </span>
              <span>Go back</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ForgotPasswordForm;
