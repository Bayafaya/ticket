import { InfiniteScroll as InfiniteScrollAntd, InfiniteScrollProps } from "antd-mobile";


export type { InfiniteScrollProps };

export const InfiniteScroll =(props: InfiniteScrollProps) => {
  return <InfiniteScrollAntd {...props} />;
};


