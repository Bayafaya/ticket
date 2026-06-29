import { Divider as DividerAntd, DividerProps } from "antd";

const Divider = ({ ...props }: DividerProps) => {
  return <DividerAntd {...props} />;
};

export type { DividerProps };

export { Divider };
