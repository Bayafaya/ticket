'use client';
import { SafeArea } from "antd-mobile";

import { PropsWithChildren } from "@/shared/types/PropsWithChildren";
import { PopupMobileLazy } from "@/shared/ui/Popup";

const EmptyLayoutMobile = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SafeArea position="top" />
      <div className="h-dvh overflow-x-hidden relative">{children}</div>
      <PopupMobileLazy />
      <SafeArea position="bottom" />
    </>
  );
};

export default EmptyLayoutMobile;
