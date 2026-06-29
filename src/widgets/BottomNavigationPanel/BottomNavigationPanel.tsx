"use client";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

import { usePathname } from "@/app/(my-app)/provider/i18nProvider";
import { Icon } from "@/shared/iconpack";
import { ROUTES, useI18nRouter } from "@/shared/lib/routes";
import TabBarMobile, { TabBarItemMobile } from "@/shared/ui/TabBarMobile";

export const BottomNavigationPanel = () => {
  const { push } = useI18nRouter();
  const pathname = usePathname();
  const t = useTranslations("general");

  const tabs = useMemo(
    () => [
      {
        key: ROUTES.home,
        title: t("home"),
        icon: <Icon name="searchIcon" />,
      },
      {
        key: ROUTES.signIn,
        title: t("map"),
        icon: <Icon name="mapIcon" />,
      },
      {
        key: ROUTES.welcome,
        title: t("books"),
        icon: <Icon name="booksIcon" />,
      },
      // {
      //   key: ROUTES.welcome,
      //   title: t("other"),
      //   icon: <Icon name="moreIcon" />,
      // },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setRouteActive = (value: string) => {
    push(`/${value}`);
  };

  return (
    <TabBarMobile
      activeKey={pathname}
      style={{
        flex: 0,
      }}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBarItemMobile key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBarMobile>
  );
};
