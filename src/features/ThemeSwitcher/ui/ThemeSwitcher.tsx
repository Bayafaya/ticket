"use client";

import { Switch } from "antd-mobile";

import { Theme, useTheme } from "@/app/(my-app)/context/ThemeContext";
import { Icon } from "@/shared/iconpack";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch
      checked={theme === Theme.DARK}
      onChange={(checked) => toggleTheme(checked ? Theme.DARK : Theme.LIGHT)}
      checkedText={<Icon name="moonIcon" />}
      uncheckedText={<Icon name="sunIcon" />}
    />
  );
};
