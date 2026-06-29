import { ConfigProvider } from "antd";

import { Segmented, SegmentedProps } from "./Segmented";

export const CapsuleSegment = <T extends string | number>(
  props: SegmentedProps<T>
) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "var(--color-brand-primary-1)",
            itemSelectedColor: "white",
            itemColor: "var(--color-brand-primary-1)",
            borderRadius: 32,
            borderRadiusSM: 32,
            controlHeight: 48,
            itemHoverColor: "white",
            trackBg: "white",
            trackPadding: 4,
          },
        },
      }}
    >
      <Segmented<T> {...props} />
    </ConfigProvider>
  );
};