import { Popup } from "antd-mobile";
import { useEffect } from "react";

import { usePathname } from "@/app/(my-app)/provider/i18nProvider";

import { usePopupStore } from "../model/global-popup-slice";
import { popupStyles } from "../model/styles";

const PopupMobile = () => {
  const pathname = usePathname();

  const body = usePopupStore((state) => state.body);
  const visible = usePopupStore((state) => state.visible);
  const variant = usePopupStore((state) => state.variant);
  const mask = usePopupStore((state) => state.mask);
  const closeModal = usePopupStore((state) => state.closeModal);
  const clearModal = usePopupStore((state) => state.clearModal);

  useEffect(() => {
    closeModal();
  }, [pathname, closeModal]);

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        closeModal();
      }}
      onClose={() => {
        closeModal();
      }}
      afterClose={() => {
        clearModal();
      }}
      onClick={(e) => e.stopPropagation()}
      mask={mask}
      bodyStyle={{
        ...popupStyles[variant],
      }}
      closeOnSwipe={variant === "drawer"}
    >
      <div className="pointer-events-auto">{body}</div>
    </Popup>
  );
};

export default PopupMobile;
