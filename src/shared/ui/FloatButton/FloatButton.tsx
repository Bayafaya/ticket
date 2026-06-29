import { FloatButton as FloatButtonAntd, FloatButtonProps } from "antd";

export const FloatButton = (props: FloatButtonProps) => {
  return <FloatButtonAntd {...props} />;
};

export const FloatButtonGroup = FloatButtonAntd.Group;
