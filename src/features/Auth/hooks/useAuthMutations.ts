import { useMutation } from "@tanstack/react-query";

import { ROUTES, useI18nRouter } from "@/shared/lib/routes";

import { authApi } from "../model/api/authApi";
import { useAuthStore } from "../model/slice/AuthSclice";

export function useAuthLoginMutations() {
  const { push } = useI18nRouter();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (res) => {
      
      useAuthStore.setState({accessToken: res.accessToken});
      push(ROUTES.home);
    },
    onError: () => {
      console.log("onError");
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
}
