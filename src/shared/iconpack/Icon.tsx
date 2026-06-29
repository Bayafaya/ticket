import { iconMap } from "./model/icon";
import { sizeMap } from "./model/size";
import { IconProps } from "./model/types";

export const Icon = ({
  name,
  color = "currentColor",
  size = "md",

  ...props
}: IconProps) =>
  iconMap[name] &&
  iconMap[name]({
    size: typeof size === "string" ? sizeMap[size] : size,
    color,
    name,
    ...props,
  });
