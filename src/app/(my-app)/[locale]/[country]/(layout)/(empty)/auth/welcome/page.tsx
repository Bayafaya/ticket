import { getUserAgentByHeaders } from "@/shared/lib/getUserAgentByHeaders";
import { DesktopWelcomePage, MobileWelcomePage } from "@/views/Welcome";

const Welcome = async () => {
  const { isDesktop } = await getUserAgentByHeaders();

  return isDesktop ? <DesktopWelcomePage /> : <MobileWelcomePage />;
};

export default Welcome;
