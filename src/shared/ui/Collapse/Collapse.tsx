import { Collapse as CollapseAntd } from 'antd';
import type { CollapseProps } from "antd"

export type { CollapseProps }

export const Collapse = (props: CollapseProps) => {
  return (
    <CollapseAntd {...props} />
  )
}
