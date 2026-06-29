import { SVGProps } from "../model/types";

const SharpExpandLeftIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#232323" />
      <path
        d="M8.21763 10.0005L11.5175 13.3003L10.5747 14.2431L6.33203 10.0005L10.5747 5.75781L11.5175 6.70062L8.21763 10.0005Z"
        fill={color || "currentColor"}
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SharpExpandLeftIcon;
