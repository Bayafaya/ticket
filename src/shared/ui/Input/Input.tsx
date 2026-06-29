import { Input as InputAntd, InputProps } from "antd";
import PasswordAntd, { PasswordProps } from "antd/es/input/Password";
import TextAreaAntd, { TextAreaProps } from "antd/es/input/TextArea";

import { Icon } from "@/shared/iconpack";

export const Input = (props: InputProps) => {
  const allowClear =
    props.allowClear === true
      ? { clearIcon: <Icon color="#57575A" name="closeIcon" /> }
      : typeof props.allowClear === "object"
        ? {
          clearIcon: <Icon color="#57575A" name="closeIcon" />,
          ...props.allowClear,
        }
        : undefined;

  return (
    <InputAntd
      allowClear={allowClear}
      {...props}
    />
  );
};


export const TextArea = (props: TextAreaProps) => {
  return <TextAreaAntd {...props} />;
};

export const Password = (props: PasswordProps) => {
  return <PasswordAntd iconRender={(visible) => (visible ? <Icon name="openEye" color="var(--color-brand-primary-1)" /> : <Icon name="closedEye" color="var(--color-brand-primary-1)" />)} {...props} />;
};
