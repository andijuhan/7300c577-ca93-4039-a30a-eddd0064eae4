"use client";

import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-xl rounded-xl border bg-gray-50 p-5">
      <div className="space-y-3">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="janedoe@gmail.com"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="secretpassword"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="secretpassword"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button className="btn-primary mt-3 w-full">Register</button>
        </form>
        <p className="text-sm">
          Have an account?{" "}
          <Link className="text-indigo-400 hover:text-indigo-500" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
