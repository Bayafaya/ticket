import { PopupMobileVariants } from "./styles";

export interface PopupSliceState {
  body: null | React.ReactNode;
  variant?: PopupMobileVariants;
  visible?: boolean;
  mask?: boolean;
}
