"use client";

import { apiUrl } from "@/config";
import { TRegister, registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  function showHidePass() {
    setShowPassword(!showPassword);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: TRegister) => {
    const { email, password } = data;
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        email,
        password,
      });
      console.log(response.data);
      reset();
      toast.success("Register success");
    } catch (error) {
      console.log(error as unknown);
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setError("email", { type: "server", message: "Email already use" });
      }
    }
  };

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
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="flex items-center">
              <input
                {...register("confirmPassword")}
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="secretpassword"
                className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Eye
                className="-ml-10 cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={showHidePass}
              />
            </div>

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
