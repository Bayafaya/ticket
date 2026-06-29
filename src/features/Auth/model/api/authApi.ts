import { api } from "@/app/(my-app)/provider/Axios";

import { LoginSchema, LoginRes } from "../types/AuthSchema";

export const authApi = {
  login: (userData: LoginSchema) =>
    api
      .post<LoginRes>("/v1/api/identity/users/login", userData)
      .then((res) => res.data),
  userBlance: () =>
    api.get<LoginSchema>("/v1/api/stats/users/balance").then((res) => res.data),
};
