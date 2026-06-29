import { Image, ImageProps } from "antd"

import { Icon } from "@/shared/iconpack"

import { Avatar } from "./Avatar"

type AvatarImageProps = {
  size?: number
  rating?: number
  radius?: number
} & ImageProps

export const AvatarImage = ({ size = 88, rating = 0, radius = 12, ...otherProps }: AvatarImageProps) => {
  return (
    <div className="relative">
      {otherProps.src ? <Image
        height={size}
        width={size}
        style={{
          borderRadius: radius
        }}
        className={`border-2 border-background-4 ${otherProps.className}`}
        alt={otherProps.alt || "image"}
        {...otherProps}
      />
        : <Avatar shape="square" style={{
          borderRadius: radius
        }} size={size} icon={<Icon name="personIcon" size={size / 2} />} />
      }
      {!!rating && <div className="flex absolute items-end gap-0.5 opacity-80 rounded-lg p-1 bottom-3 left-1 bg-background-1">
        <Icon name="starFilledIcon" color="var(--color-text-secondary-1)" size="sm" />
        <span className="text-[10px] leading-[10px]">{rating}</span>
      </div>}
    </div>
  )
}
