"use client";
import { baseUrl } from "@/config";
import { TLogin, loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  error?: string;
}

export default function LoginForm({ error }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLogin) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: `${baseUrl}/dashboard`,
    });
  };

  function showHidePass() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-3 rounded-xl border bg-gray-50 px-5 py-7">
      {error && (
        <div className="w-full rounded-md bg-red-100 py-3 text-center text-red-500">
          <p>Authentication failed</p>
        </div>
      )}
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
            <div className="flex items-center">
              <input
                {...register("password")}
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
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-3 w-full "
          >
            Login
          </button>
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
