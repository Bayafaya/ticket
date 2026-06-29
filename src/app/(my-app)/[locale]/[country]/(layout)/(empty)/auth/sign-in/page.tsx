import { getUserAgentByHeaders } from "@/shared/lib/getUserAgentByHeaders";
import { DesktopSignInPage, MobileSignInPage } from "@/views/SignIn";

const SignIn = async () => {
  const { isDesktop } = await getUserAgentByHeaders();

  return isDesktop ? <DesktopSignInPage /> : <MobileSignInPage />;
};

export default SignIn;
