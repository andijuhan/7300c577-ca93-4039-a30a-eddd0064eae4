"use client";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function showHidePass() {
    setShowPassword(!showPassword);
  }

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
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="secretpassword"
                className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Eye
                className="-ml-10 cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={showHidePass}
              />
            </div>
          </div>
          <button className="btn-primary mt-3 w-full">Login</button>
        </form>
        <p className="text-sm">
          <Link className="text-indigo-400 hover:text-indigo-500" href="/">
            Forgot password?
          </Link>{" "}
          or{" "}
          <Link
            className="text-indigo-400 hover:text-indigo-500"
            href="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
