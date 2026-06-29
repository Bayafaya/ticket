import { Tooltip as TooltipAntd, TooltipProps } from "antd";

const Tooltip = ({ ...props }: TooltipProps) => {
  return <TooltipAntd {...props} />;
}

export type { TooltipProps };
export { Tooltip }