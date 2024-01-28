import { z } from "zod";

export const shortenSchema = z.object({
  originalUrl: z
    .string()
    .min(1, "Url is required")
    .max(1000)
    .url("Invalid URL"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type TShorten = z.infer<typeof shortenSchema>;
export type TLogin = z.infer<typeof loginSchema>;
export type TRegister = z.infer<typeof registerSchema>;
