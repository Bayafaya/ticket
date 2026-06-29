import { Radio as RadioAntd, RadioProps, RadioGroupProps } from "antd";
import { Group } from "antd/es/radio";

export const Radio = (props: RadioProps) => {
  return <RadioAntd {...props} />;
};

export const RadioGroup = (props: RadioGroupProps) => {
  return <Group {...props} />;
};
