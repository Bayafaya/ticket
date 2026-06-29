"use client";

import dynamic from "next/dynamic";

export const PopupMobileLazy = dynamic(() => import("./ui/PopupMobile"), {
  ssr: false,
});
