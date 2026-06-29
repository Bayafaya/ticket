import { SVGProps } from "../model/types"

const CheckedSecIcon = ({ size, color, ...props }: SVGProps) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.5 12.75L10.5 18.75L19.5 5.25"
      stroke={color || "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
}

export default CheckedSecIcon