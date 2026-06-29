"use client";

import { Suspense } from "react";

import "@/app/(my-app)/styles/globals.css";

import { ThemeProvider } from "@/app/(my-app)/context/ThemeContext";
import { AntMobileProvider } from "@/app/(my-app)/provider/AntMobile";
import { AntProvider } from "@/app/(my-app)/provider/AntProvider";
import { AuthProvider } from "@/app/(my-app)/provider/AuthProvider";
import { LocaleProvider } from "@/app/(my-app)/provider/DayjsProvider";
import { QueryProvider } from "@/app/(my-app)/provider/QueryProvider";
import { PropsWithChildren } from "@/shared/types/PropsWithChildren";
import MapLoader from "@/shared/ui/Loader/MapLoader";

type GlobalLayoutProps = PropsWithChildren;

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <Suspense fallback={<MapLoader />}>
      <LocaleProvider>
        <QueryProvider>
          <AuthProvider>
            <AntProvider>
              <AntMobileProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </AntMobileProvider>
            </AntProvider>
          </AuthProvider>
        </QueryProvider>
      </LocaleProvider>
    </Suspense>
  );
};
