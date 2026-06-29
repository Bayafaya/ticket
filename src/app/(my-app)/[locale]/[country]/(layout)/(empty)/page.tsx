import { getUserAgentByHeaders } from "@/shared/lib/getUserAgentByHeaders";
import { MobileHomePage, DesktopHomePage } from "@/views/Home";

const Home = async () => {
  const { isDesktop } = await getUserAgentByHeaders();

  return isDesktop ? <DesktopHomePage /> : <MobileHomePage />;
};

export default Home;
