import { create } from "zustand";

import { queryClient } from "@/app/(my-app)/provider/QueryProvider/ui/QueryProvider";

type AuthState = {
  accessToken: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,

  setToken: (token) => set({ accessToken: token }),

  logout: () => {
    set({ accessToken: null });
    queryClient.clear();
  },
}));
