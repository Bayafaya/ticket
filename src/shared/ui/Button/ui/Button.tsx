'use client';
import { Button as ButtonAntd, ButtonProps } from "antd";

export const Button = ({ children, ...otherProps }: ButtonProps) => {
  const stylesFn: ButtonProps["styles"] = (info) => {
    if (info.props.type === "primary") {
      return {
        root: {
          border: 0,
        },
        content: {
          color: "white",
        },
      } satisfies ButtonProps["styles"];
    }
    if (info.props.variant === "outlined" && info.props.disabled) {
      return {
        root: { opacity: 0.4 },
      };
    }
    return {};
  };

  return (
    <ButtonAntd data-testid="primary-button" styles={stylesFn} {...otherProps}>
      {children}
    </ButtonAntd>
  );
};

export type {
  ButtonProps
}

