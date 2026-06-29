import { create } from "zustand";

import { PopupMobileVariants } from "./styles";
import { PopupSliceState } from "./types";

interface PopupStoreState {
  body: PopupSliceState["body"];
  variant: PopupMobileVariants;
  visible: boolean;
  mask: boolean;
}

interface PopupStore extends PopupStoreState {
  openModal: (payload: PopupSliceState) => void;
  closeModal: () => void;
  clearModal: () => void;
}

const initialState: PopupStoreState = {
  body: null,
  variant: "drawer",
  visible: false,
  mask: false,
};

export const usePopupStore = create<PopupStore>((set) => ({
  ...initialState,
  openModal: ({ body, variant = "drawer", mask = false }) => {
    set({
      body,
      variant,
      visible: true,
      mask,
    });
  },
  closeModal: () => {
    set({ visible: false });
  },
  clearModal: () => {
    set(initialState);
  },
}));
