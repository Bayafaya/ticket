import { SVGProps } from "../model/types";

const FilledPositionIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        fill={color || "currentColor"}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FilledPositionIcon;
