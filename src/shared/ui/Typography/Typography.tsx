"use client";

import { Typography as TypographyAntd, theme } from "antd";
import TypographyParagraphAntd, {
  ParagraphProps as ParagraphPropsAntd,
} from "antd/es/typography/Paragraph";
import TypographyTextAntd, { TextProps } from "antd/es/typography/Text";
import TypographyTitleAntd, { TitleProps } from "antd/es/typography/Title";
import { ComponentProps } from "react";

export type TextCutomSizes = {
  size?: "md" | "sm";
};

export const Typography = (props: ComponentProps<typeof TypographyAntd>) => {
  return <TypographyAntd {...props} />;
};

export type TypographyParagraphProps = TextCutomSizes & ParagraphPropsAntd;

export const TypographyParagraph = ({
  style,
  size = "md",
  ...props
}: TypographyParagraphProps) => {
  const { token } = theme.useToken();

  const getFontSize = () => {
    switch (size) {
      case "md":
        return token.fontSizeTextM;
      case "sm":
        return token.fontSizeTextS;
      default:
        return token.fontSizeTextM;
    }
  };

  const getLineHeight = () => {
    switch (size) {
      case "md":
        return token.lineHeightTextM;
      case "sm":
        return token.lineHeightTextS;
      default:
        return token.lineHeightTextM;
    }
  };
  return (
    <TypographyParagraphAntd
      style={{
        fontWeight: 400,
        fontSize: getFontSize(),
        lineHeight: getLineHeight(),
        marginBottom: 0,
        ...style,
      }}
      {...props}
    />
  );
};

export type TypographyTextProps = TextCutomSizes & TextProps;

export const TypographyText = ({
  style,
  size = "md",
  ...props
}: TypographyTextProps) => {
  const { token } = theme.useToken();

  const getFontSize = () => {
    switch (size) {
      case "md":
        return token.fontSizeTextM;
      case "sm":
        return token.fontSizeTextS;
      default:
        return token.fontSizeTextM;
    }
  };

  const getLineHeight = () => {
    switch (size) {
      case "md":
        return token.lineHeightTextM;
      case "sm":
        return token.lineHeightTextS;
      default:
        return token.lineHeightTextM;
    }
  };

  return (
    <TypographyTextAntd
      style={{
        fontWeight: 400,
        fontSize: getFontSize(),
        lineHeight: getLineHeight(),
        ...style,
      }}
      {...props}
    />
  );
};

export const TypographyTitle = (props: TitleProps) => {
  const getLetter = (level?: TitleProps['level']) => {
    switch (level) {
      case 1:
        return "-2%";
      case 2:
        return "-4%";
      default:
        return 2;
    }
  };
  return (
    <TypographyTitleAntd
      style={{
        letterSpacing: getLetter(props.level),
      }}
      {...props}
    />
  );
};

export type TypographySubtitleProps = {
  level?: 1 | 2;
} & TextProps;

export const TypographySubtitle = ({
  level = 1,
  style,
  ...props
}: TypographySubtitleProps) => {
  const { token } = theme.useToken();

  const getFontSize = () => {
    switch (level) {
      case 1:
        return token.fontSizeSubtitle1;
      case 2:
        return token.fontSizeSubtitle2;
      default:
        return token.fontSizeSubtitle1;
    }
  };

  const getLineHeight = () => {
    switch (level) {
      case 1:
        return token.lineHeightSubtitle1;
      case 2:
        return token.lineHeightSubtitle2;
      default:
        return token.lineHeightSubtitle1;
    }
  };

  return (
    <TypographyTextAntd
      style={{
        fontWeight: 400,
        fontSize: getFontSize(),
        lineHeight: getLineHeight(),
        ...style,
      }}
      {...props}
    />
  );
};
