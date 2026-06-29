import { TabBar as TabBarAntd, TabBarItemProps } from "antd-mobile";

export const TabBarItemMobile = (props: TabBarItemProps) => {
  const { Item } = TabBarAntd;
  return <Item {...props} />;
};
