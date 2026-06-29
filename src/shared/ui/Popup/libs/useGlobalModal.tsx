import { usePopupStore } from "../model/global-popup-slice";
import { PopupSliceState } from "../model/types";

export default function usePopupMobile() {
  const visible = usePopupStore((state) => state.visible);
  const openModalAction = usePopupStore((state) => state.openModal);
  const closeModal = usePopupStore((state) => state.closeModal);
  const clearModal = usePopupStore((state) => state.clearModal);

  const openModal = (body: PopupSliceState) => {
    openModalAction(body);
  };

  return {
    visible,
    openModal,
    closeModal,
    clearModal,
  };
}
