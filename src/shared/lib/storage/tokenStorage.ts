import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "./localStorage";
import {
  deleteSessionStorage,
  getSessionStorage,
  setSessionStorage,
} from "./sessionStorage";

export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";

export const TokenStorage = {
  setAccessToken(token: string, saveLocal = true) {
    if (saveLocal) {
      setLocalStorage({ key: ACCESS_TOKEN_KEY, value: token });
    } else {
      setSessionStorage({ key: ACCESS_TOKEN_KEY, value: token });
    }
  },

  getAccessToken(): string | null {
    return (
      getLocalStorage(ACCESS_TOKEN_KEY) ||
      getSessionStorage(ACCESS_TOKEN_KEY) ||
      null
    );
  },

  setRefreshToken(token: string, saveLocal = true) {
    if (saveLocal) {
      setLocalStorage({ key: REFRESH_TOKEN_KEY, value: token });
    } else {
      setSessionStorage({ key: REFRESH_TOKEN_KEY, value: token });
    }
  },

  getRefreshToken(): string | null {
    return (
      getLocalStorage(REFRESH_TOKEN_KEY) ||
      getSessionStorage(REFRESH_TOKEN_KEY) ||
      null
    );
  },

  deleteStorage() {
    deleteLocalStorage(ACCESS_TOKEN_KEY);
    deleteSessionStorage(ACCESS_TOKEN_KEY);
    deleteLocalStorage(REFRESH_TOKEN_KEY);
    deleteSessionStorage(REFRESH_TOKEN_KEY);
  },
};
