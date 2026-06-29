import { SetStorageProps } from "./types";

export const setLocalStorage = ({ key, value }: SetStorageProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorageAsOBJ = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) || "";
  }
  return "";
};

export const deleteLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
