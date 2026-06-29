import { TabBar as TabBarAntd, TabBarProps } from "antd-mobile";

export const TabBarMobile = ({ children, ...props }: TabBarProps) => {
  return (
    <TabBarAntd
      safeArea
      {...props}
      className="fixed w-full bottom-0 z-50 bg-white dark:bg-black border-t border-primary-border transition-bg"
    >
      {children}
    </TabBarAntd>
  );
};
