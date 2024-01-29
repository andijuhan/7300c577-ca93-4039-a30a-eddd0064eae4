"use client";
import {
  ClipboardCheck,
  ClipboardCopy,
  Copy,
  Link as LinkIcon,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shortUrlSchema, TShortUrl } from "@/lib/validation";
import toast from "react-hot-toast";
import axios from "axios";
import { apiUrl, baseUrl } from "@/config";

export default function Shortener() {
  const [isAuth, setIsAuth] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    setError,
  } = useForm<TShortUrl>({
    resolver: zodResolver(shortUrlSchema),
  });

  const onSubmit = async (data: TShortUrl) => {
    const response = await axios.post(`${apiUrl}/short-url`, data);

    const shortUrl = `${baseUrl}/${response.data.shortSlug}`;

    setShortenedUrl(shortUrl);
    setShowNotify(true);

    if (response.status !== 201) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (showNotify) {
      setTimeout(() => {
        setShowNotify(false);
      }, 5000);
    }
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [showNotify, copied]);

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
              <div className="flex w-full items-center gap-3">
                <input
                  {...register("originalUrl")}
                  type="text"
                  id="originalUrl"
                  name="originalUrl"
                  placeholder="https://super-long-link.com/sport/jannik-sinner-daniil-medvedev"
                  className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  className="-ml-[110px] flex w-fit cursor-copy items-center gap-2 rounded-lg bg-teal-50 p-2 text-teal-800 hover:bg-gray-50"
                  onClick={async () => {
                    const text = await navigator.clipboard.readText();
                    setValue("originalUrl", text);
                  }}
                >
                  Paste
                  <ClipboardCopy size={20} />
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary hidden min-w-[120px] items-center justify-center md:flex"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Shorten"
                )}
              </button>
            </div>
            {errors.originalUrl && (
              <p className="text-red-500">{`${errors.originalUrl.message}`}</p>
            )}
          </div>
        </div>
        {shortenedUrl.length > 0 ? (
          <div className="flex w-full items-center justify-between gap-4 rounded-lg bg-teal-100 p-3">
            <div
              className={`${showNotify && "animate-pulse"} flex items-center gap-4`}
            >
              <LinkIcon size={20} />
              <p className="font-medium text-teal-800">{shortenedUrl}</p>
            </div>

            <button
              type="button"
              className="flex w-fit cursor-copy items-center gap-2 rounded-lg bg-teal-50 p-2 text-teal-800 hover:bg-gray-50"
              onClick={() => {
                navigator.clipboard.writeText(shortenedUrl);
                setCopied(true);
              }}
            >
              {copied ? (
                <>
                  Copied <ClipboardCheck />
                </>
              ) : (
                <>
                  Copy <Copy size={20} />
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="flex w-full items-center gap-4 rounded-lg bg-teal-100 p-4 text-teal-800">
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
