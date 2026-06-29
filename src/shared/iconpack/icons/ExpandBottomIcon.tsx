import { SVGProps } from "../model/types";

const ExpandBottomIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.5 8.25L12 15.75L4.5 8.25"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  );
};

export default ExpandBottomIcon;
