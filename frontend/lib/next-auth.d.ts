import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      isActive: boolean;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      email: string;
      isActive: boolean;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
