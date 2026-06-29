"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import { PropsWithChildren } from "react";

import { useTheme } from "@/app/(my-app)/context/ThemeContext";

export function AntProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "var(--font-inter)",
            colorPrimary: "var(--color-brand-secondary-1)",
            colorText: "var(--color-text-primary-1)",
            colorError: "#FF3D3E",
            colorSuccess: "#00B735",
            colorWarning: "#FAD100",
            controlInteractiveSize: 24,
            borderRadius: 8,

            fontSizeSubtitle1: 16,
            lineHeightSubtitle1: 1,

            fontSizeSubtitle2: 16,
            lineHeightSubtitle2: 1.25,

            fontSizeTextM: 16,
            lineHeightTextM: 1.25,

            fontSizeTextS: 12,
            lineHeightTextS: 1.333,
          },
          components: {
            Button: {
              fontWeight: 600,
              fontSize: 16,
              controlHeight: 48,
              //@ts-expect-error made var global change radius of ui
              borderRadius: "var(--radius-primary-button)",
              primaryShadow: "none",
              padding: 12,
              colorPrimary: "var(--color-brand-secondary-1)",
              colorPrimaryHover: "var(--color-button-pressed)",
              colorPrimaryActive: "var(--color-button-pressed)",
              colorBgContainerDisabled: "var(--color-brand-primary-disable)",
              colorTextDisabled: "var(--color-text-button-disable)",
              defaultBorderColor: "var(--color-brand-secondary-1)",
              colorBorderDisabled: "var(--color-brand-primary-disable)",
              defaultHoverBg: "var(--color-button-pressed)",
              defaultActiveBg: "var(--color-button-pressed)",
              defaultActiveColor: "var(--color-white)",
              defaultHoverColor: "var(--color-white)",
            },
            Typography: {
              fontWeightStrong: 600,

              fontSizeHeading1: 24,
              lineHeightHeading1: 1.167,

              fontSizeHeading2: 20,
              lineHeightHeading2: 1.2,

              fontSizeHeading3: 16,
              lineHeightHeading3: 1,

              fontSizeHeading4: 16,
              lineHeightHeading4: 1.25,

              fontSizeHeading5: 12,
              lineHeightHeading5: 1.3333,

              titleMarginBottom: 0,
              titleMarginTop: 0,
            },
            Input: {
              //@ts-expect-error made var global change radius of ui
              borderRadius: "var(--radius-primary-button)",
              hoverBorderColor: "var(--color-brand-secondary-1)",
              activeBorderColor: "var(--color-brand-secondary-1)",
              activeShadow: "none",
              //@ts-expect-error antd type error
              paddingBlock: "13px 20px 13px",
              paddingInline: 20,
              colorBorder: "var(--color-boder-inputs)",
              fontSize: 16,
              lineHeight: 1.25,
            },
            InputNumber: {
              //@ts-expect-error made var global change radius of ui
              borderRadius: "var(--radius-primary-button)",
              controlHeight: 48,
              hoverBorderColor: "var(--color-brand-secondary-1)",
              activeBorderColor: "var(--color-brand-secondary-1)",
              activeShadow: "none",
              colorBorder: "var(--color-boder-inputs)",
              fontSize: 16,
              lineHeight: 1.25,
              paddingInline: 20,
            },
            Form: {
              labelColor: "var(--color-brand-secondary-2)",
              labelFontSize: 16,
              labelHeight: 20,
              verticalLabelPadding: "0px 0px 16px 0px",
            },
            Select: {
              colorBorder: "var(--color-boder-inputs)",
            },
            Modal: {
              padding: 0,
              colorBgBase: "#111111",
            },
          },
        }}
        locale={ruRU}
      >
        <App className={theme || ""}>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
