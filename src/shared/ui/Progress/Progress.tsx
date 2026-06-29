import { Progress as ProgressAntd, ProgressProps } from "antd";

export const Progress = (props: ProgressProps) => {
  return <ProgressAntd {...props} />;
};

export type { ProgressProps };
