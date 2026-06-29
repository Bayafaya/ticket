"use client";

import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/app/(my-app)/provider/i18nProvider";

const splitPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);

  return {
    country: parts[0] || "kg",
    page: "/" + (parts.slice(1).join("/") || ""),
  };
};

export const useI18nRouter = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const { country, page } = splitPath(pathname);
  const push = (nextPage: string) => {
    router.push(`/${country}${nextPage}`);
  };

  const changeCountry = (newCountry: string) => {
    document.cookie = `country=${newCountry}; path=/; max-age=31536000`;

    router.push(`/${newCountry}${page}`);
  };

  const changeLocale = (newLocale: string) => {
    router.push(`/${country}${page}`, { locale: newLocale });
  };

  return {
    ...router,
    push,
    changeCountry,
    changeLocale,
    locale,
    country,
    page,
  };
};
