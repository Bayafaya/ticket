"use client";

import { NavBar, Space } from "antd-mobile";
import { useTranslations } from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/app/(my-app)/provider/i18nProvider";
import { Icon } from "@/shared/iconpack";
import { ROUTES } from "@/shared/lib/routes";
import { Avatar } from "@/shared/ui/Avatar";
import { TypographyText } from "@/shared/ui/Typography";

export const NavBarMobile = () => {
  const { back } = useRouter();
  const t = useTranslations("general");
  const pathname = usePathname();

  const isRootPath = pathname === "/";

  const handleBack = () => {
    if (isRootPath) {
      return;
    }
    back();
  };

  return (
    <NavBar
      className="transition-bg"
      right={
        <Space
          align="center"
          style={{
            height: "30px",
          }}
        >
          <Link href={ROUTES.signIn}>
            <Avatar
              alt="avatar"
              size={32}
              icon={
                <Icon name="personIcon" color="var(--color-text-secondary-3)" />
              }
            />
          </Link>
        </Space>
      }
      onBack={handleBack}
      backIcon={
        isRootPath ? (
          <Icon color="var(--color-brand-primary-1)" name="brandNameLogo" />
        ) : (
          <Icon className="rotate-90" name="expandBottomIcon" />
        )
      }
    >
      <TypographyText size="md">{t("appName")}</TypographyText>
    </NavBar>
  );
};
