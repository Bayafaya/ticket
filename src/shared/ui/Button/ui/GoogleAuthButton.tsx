import { ConfigProvider } from "antd"

import { Button, ButtonProps } from "./Button"

import '../styles/google-auth-button.css'

export const GoogleAuthButton = (props: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            primaryShadow: "none",
            colorPrimary: "#1F1F1F",
            defaultBorderColor: "#747775",
            defaultHoverBg: "#4D4D4D52",
            defaultActiveBg: "#4D4D4D52",
            defaultActiveColor: "#1F1F1F",
            defaultHoverColor: "#1F1F1F",
            colorBorderDisabled: "#747775",
            fontWeight: 500
          },
        },
      }}
    >
      <Button className="googleAuthButton" {...props} />
    </ConfigProvider>
  )
}
