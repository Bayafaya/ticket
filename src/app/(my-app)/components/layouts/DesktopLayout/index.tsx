import { PropsWithChildren } from "@/shared/types/PropsWithChildren";

type DesktopLayoutProps = object;

export default function DesktopLayout({
  children,
}: PropsWithChildren<DesktopLayoutProps>) {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex-1 mb-tab-bar-height overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
