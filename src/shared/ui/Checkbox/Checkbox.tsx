import { Checkbox as CheckboxAntd, CheckboxProps } from "antd";
import CheckboxGroupAntd from "antd/es/checkbox/Group";
import type { CheckboxGroupProps } from "antd/es/checkbox/Group";

export const Checkbox = (props: CheckboxProps) => {
  return <CheckboxAntd {...props} />;
};

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <CheckboxGroupAntd {...props} />;
};
