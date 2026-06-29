import { SVGProps } from "../model/types"

const DotIcon = ({ size, color, ...props }: SVGProps) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 2 2" fill="none" {...props}>
    <circle cx="1" cy="1" r="1" fill={color || "currentColor"} />
  </svg>
}

export default DotIcon
