"use client";
import { createContext, useContext, useState, useEffect } from "react";

// import { getLocalStorage } from "@/shared/lib/storage/localStorage";

import { THEME_KEY, Theme } from "../model/types/ThemeTypes";

interface ThemeContextType {
  theme: Theme | null;
  toggleTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // const savedTheme = getLocalStorage(THEME_KEY) as Theme | null;
    // const systemDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;
    // const effectiveTheme =
    //   savedTheme || (systemDark ? Theme.DARK : Theme.LIGHT);

    // setTheme(effectiveTheme);
    // document.documentElement.setAttribute("data-theme", effectiveTheme);
    // setIsHydrated(true);

    const effectiveTheme =Theme.LIGHT 

    setTheme(effectiveTheme);
    document.documentElement.setAttribute("data-theme", effectiveTheme);
    setIsHydrated(true);
  }, []);

  const toggleTheme = (theme: Theme) => {
    if (!theme) return;
    const newTheme = theme;
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!isHydrated || !theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
