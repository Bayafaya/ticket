import {
  Segmented as SegmentedAntd,
  SegmentedProps,
} from "antd";

export const Segmented = <T extends string | number>(
  props: SegmentedProps<T>
) => {
  return <SegmentedAntd<T> {...props} />;
};

export type { SegmentedProps };