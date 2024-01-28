"use client";

import { TRegister, registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: TRegister) => {};

  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border bg-gray-50 px-5 py-7">
      <div className="space-y-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              placeholder="janedoe@gmail.com"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="text"
              id="password"
              name="password"
              placeholder="secretpassword"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              {...register("confirmPassword")}
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="secretpassword"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
          <button type="submit" className="btn-primary mt-3 w-full">
            Register
          </button>
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
