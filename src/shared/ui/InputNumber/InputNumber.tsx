import { InputNumber as InputNumberAntd, InputNumberProps } from "antd";

export const InputNumber = ({ ...props }: InputNumberProps) => {
  return <InputNumberAntd {...props} />;
};
