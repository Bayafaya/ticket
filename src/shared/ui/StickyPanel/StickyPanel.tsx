import { PropsWithOptionalChildren } from "@/shared/types/PropsWithChildren"

export type StickyPanelProps = {} & PropsWithOptionalChildren

export const StickyPanel = ({ children }: StickyPanelProps) => {
  return (
    <div className="sticky bottom-0 bg-background-1 shadow-sticky-panel px-5 pt-4 pb-8 z-10">{children}</div>
  )
}
