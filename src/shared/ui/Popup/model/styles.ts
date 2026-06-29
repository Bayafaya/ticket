export const popupStyles = {
  drawer: {
    borderTopLeftRadius: "32px",
    borderTopRightRadius: "32px",
    height: "fitContent",
    boxShadow: "rgba(176, 176, 176, 0.25)",
  },
  drawerRounded: {
    width: "calc(100% - 40px)",
    borderTopLeftRadius: "36px",
    borderTopRightRadius: "36px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    marginBottom: "20px",
    marginLeft: "20px",
    height: "fitContent",
    boxShadow: "rgba(176, 176, 176, 0.25)",
  },
  fullScreen: {
    minHeight: `calc(100dvh - var(--spacing-header-height))`,
    maxHeight: `calc(100dvh - var(--spacing-header-height))`,
    marginBottom: "var(--spacing-tab-bar-height)",
    background: "white",
    overflow: "auto",
  },
  fullScreenFill: {
    minHeight: `100dvh`,
    maxHeight: `100dvh`,
    background: "white",
    overflow: "auto",
    zIndex: 1000,
  },
};

export type PopupMobileVariants = keyof typeof popupStyles;
