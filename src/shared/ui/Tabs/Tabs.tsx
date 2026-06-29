import { Tabs as TabsAntd } from "antd";
import type { TabsProps } from "antd";
import "./PillStyle.css";

export const Tabs = (props: TabsProps) => {
  return <TabsAntd {...props} />;
};
