import { Swiper as SwiperAntd, SwiperProps, SwiperRef } from "antd-mobile";
import '../styles/CustomIndicators.css'

export const Swiper = (props: SwiperProps) => {
  return <SwiperAntd {...props} />
}

export const SwiperItem = SwiperAntd.Item;
export type { SwiperRef }




