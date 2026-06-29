import { Select as SelectAntd, SelectProps } from "antd";

import { Icon } from "@/shared/iconpack";

export type { SelectProps }


export const Select = ({ ...props }: SelectProps) => {
  return (
    <SelectAntd
      suffixIcon={<Icon name="phoneExpandArrowIcon" className="mr-2!" size="sm" color="#6D6D71" />}
      {...props}
    />
  );
};
