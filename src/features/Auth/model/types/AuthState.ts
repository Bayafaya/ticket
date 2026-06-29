export type AuthState = {
  accessToken: string | null;
  setToken: (token: string | null) => void;
};
