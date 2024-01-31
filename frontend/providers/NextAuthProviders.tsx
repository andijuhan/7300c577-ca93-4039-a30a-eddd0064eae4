"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthProvidersProps {
  children: ReactNode;
}

export default function NextAuthProviders({
  children,
}: NextAuthProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
