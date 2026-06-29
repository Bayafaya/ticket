import { SVGProps } from "../model/types"

const PhoneExpandArrowIcon = ({ size, color, ...props }: SVGProps) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12" fill="none" {...props}>
    <path d="M3 3H9L6 9L3 3Z" fill={color || "currentColor"} fillOpacity="0.96" />
  </svg>
}

export default PhoneExpandArrowIcon
