"use client";
import { Copy, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shortenSchema, TShorten } from "@/lib/validation";
import toast from "react-hot-toast";

export default function Shortener() {
  const [isAuth, setIsAuth] = useState(false);
  const [isShortened, setIsShortened] = useState(true);
  const [shortenUrl, setShortenUrl] = useState("moli.cx/short");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TShorten>({
    resolver: zodResolver(shortenSchema),
  });

  const onSubmit = async (data: TShorten) => {};

  return (
    <div className="mx-auto flex w-full flex-col gap-5 rounded-xl border bg-gray-50 px-5 py-10 text-gray-800 shadow-sm md:px-7">
      <h2 className="text-3xl font-bold">Shorten a long link</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex items-end gap-3">
          <div className="flex grow flex-col gap-2">
            <label
              className="text-lg font-bold text-gray-600"
              htmlFor="originalUrl"
            >
              Paste a long URL
            </label>
            <div className="flex items-center justify-between gap-3">
              <input
                {...register("originalUrl")}
                type="text"
                id="originalUrl"
                name="originalUrl"
                placeholder="https://super-long-link.com/sport/jannik-sinner-daniil-medvedev"
                className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button type="submit" className="btn-primary hidden md:block">
                Shorten
              </button>
            </div>
            {errors.originalUrl && (
              <p className="text-red-500">{`${errors.originalUrl.message}`}</p>
            )}
          </div>
        </div>
        {isShortened ? (
          <div className="flex w-full items-center justify-between gap-4 rounded-lg bg-teal-100 p-3">
            <div className="flex items-center gap-4">
              <LinkIcon size={20} />
              <p className="font-medium text-teal-800">{shortenUrl}</p>
            </div>

            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-lg bg-teal-50 p-2 text-teal-800 hover:bg-gray-50"
              onClick={() => {
                navigator.clipboard.writeText(shortenUrl);
                toast.success("Copied to clipboard");
              }}
            >
              Copy
              <Copy className="cursor-copy" size={20} />
            </button>
          </div>
        ) : (
          <div className="flex w-full items-center gap-4 rounded-lg bg-teal-100 p-3 text-teal-800">
            <LinkIcon size={20} />
            <p>Your short link will be shown here.</p>
          </div>
        )}

        <button className="btn-primary w-full md:hidden">Shorten</button>
        <p className="text-center text-sm text-gray-600">
          By clicking Shorten URL, you agree to Rebrandly&apos;s{" "}
          <span className="underline">Terms of Use</span>,{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Cookie Policy</span>
        </p>
      </form>
    </div>
  );
}
