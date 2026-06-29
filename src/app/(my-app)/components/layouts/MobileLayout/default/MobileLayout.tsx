'use client'
import { SafeArea } from "antd-mobile";

import { PropsWithChildren } from "@/shared/types/PropsWithChildren";
import { PopupMobileLazy } from "@/shared/ui/Popup";
import { BottomNavigationPanel } from "@/widgets/BottomNavigationPanel";
import { NavBarMobile } from "@/widgets/NavBarMobile";

type MobileLayoutProps = object;

export default function MobileLayout({
  children,
}: PropsWithChildren<MobileLayoutProps>) {
  return (
    <div className="overflow-x-hidden relative flex flex-col min-h-screen"> 
      <SafeArea position="top" />
      <NavBarMobile />
      <main className="flex flex-col flex-1 overflow-y-auto pb-tab-bar-height">
        {children}
      </main>
      <PopupMobileLazy />
      <BottomNavigationPanel />
    </div>
  );
}
