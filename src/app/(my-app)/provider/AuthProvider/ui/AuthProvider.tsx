"use client";

import { useEffect } from "react";

import { useAuthStore } from "@/features/Auth";

import { api } from "../../Axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((s) => s.accessToken);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common.Authorization;
    }
  }, [token]);

  return children;
};
