/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { useAuthStore } from "@/features/Auth";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

let isRefreshing = false;
let queue: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

const processQueue = (error: any, token: string | null) => {
  queue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token!);
  });

  queue = [];
};

api.interceptors.response.use(
  (res) => res,

  async (error) => {
    const original = error.config;
    if (!original) throw error;

    if (error.response?.status !== 401 || original._retry) {
      throw error;
    }

    original._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        queue.push({
          resolve: (token: string) => {
            original.headers.Authorization = `Bearer ${token}`;
            resolve(api(original));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/api/identity/users/refresh-token`,
        {},
        { withCredentials: true },
      );

      const newToken = res.data.accessToken;

      useAuthStore.getState().setToken(newToken);

      processQueue(null, newToken);

      original.headers.Authorization = `Bearer ${newToken}`;

      return api(original);
    } catch (err) {
      processQueue(err, null);
      useAuthStore.getState().logout();
      throw err;
    } finally {
      isRefreshing = false;
    }
  },
);
