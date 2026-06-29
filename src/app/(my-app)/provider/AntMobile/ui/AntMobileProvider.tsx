"use client";

import { ConfigProvider } from "antd-mobile";
import ru_RU from "antd-mobile/es/locales/ru-RU";
import { PropsWithChildren } from "react";

import "./styles.css";

export function AntMobileProvider({ children }: PropsWithChildren) {
  return <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>;
}
