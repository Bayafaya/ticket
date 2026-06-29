import DesktopLayout from "@/app/(my-app)/components/layouts/DesktopLayout";
import { MobileLayout } from "@/app/(my-app)/components/layouts/MobileLayout";
import { getUserAgentByHeaders } from "@/shared/lib/getUserAgentByHeaders";
import { PropsWithChildren } from "@/shared/types/PropsWithChildren";

const Layout = async ({ children }: PropsWithChildren) => {
  const { isDesktop } = await getUserAgentByHeaders();

  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileLayout>{children}</MobileLayout>
  );
};

export default Layout;
