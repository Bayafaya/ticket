import { headers } from "next/headers";

export const getUserAgentByHeaders = async () => {
  const userAgent = (await headers()).get("user-agent");
  const isMobile = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Windows Phone|Mobile\s*Explorer|mobile|Mobile\s*Safari|Tablet|iPad\s*Pro/i
  );
  const isTablet = userAgent?.match(/iPad|Android|Tablet/i);
  const isDesktop = !isMobile && !isTablet;

  return { isMobile: !!isMobile, isTablet: !!isTablet, isDesktop };
};
