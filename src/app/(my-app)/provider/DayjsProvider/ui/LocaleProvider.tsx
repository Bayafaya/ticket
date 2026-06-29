"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

import { setDayjsLocale } from "@/shared/lib/dayjs/dayjsWithLocale";
import { PropsWithChildren } from "@/shared/types/PropsWithChildren";

export function LocaleProvider({ children }: PropsWithChildren) {
  const locale = useLocale();

  useEffect(() => {
    setDayjsLocale(locale);
  }, [locale]);

  return <>{children}</>;
}
