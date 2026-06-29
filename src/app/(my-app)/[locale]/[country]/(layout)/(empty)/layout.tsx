import DesktopLayout from "@/app/(my-app)/components/layouts/DesktopLayout";
import { EmptyLayoutMobile } from "@/app/(my-app)/components/layouts/MobileLayout";
import { getUserAgentByHeaders } from "@/shared/lib/getUserAgentByHeaders";
import { PropsWithChildren } from "@/shared/types/PropsWithChildren";

const Layout = async ({ children }: PropsWithChildren) => {
  const { isDesktop } = await getUserAgentByHeaders();

  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <EmptyLayoutMobile>{children}</EmptyLayoutMobile>
  );
};

export default Layout;
