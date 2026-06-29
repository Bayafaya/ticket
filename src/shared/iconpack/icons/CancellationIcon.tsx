import { SVGProps } from "../model/types";

const CancellationIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.8641 18.3641C20.5519 16.6762 21.5001 14.387 21.5001 12.0001C21.5001 9.61309 20.5519 7.32389 18.8641 5.63606C17.1762 3.94822 14.887 3 12.5001 3C10.1131 3 7.82389 3.94822 6.13606 5.63606M18.8641 18.3641C17.1762 20.0519 14.887 21.0001 12.5001 21.0001C10.1131 21.0001 7.82389 20.0519 6.13606 18.3641C4.44822 16.6762 3.5 14.387 3.5 12.0001C3.5 9.61309 4.44822 7.32389 6.13606 5.63606M18.8641 18.3641L6.13606 5.63606"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CancellationIcon;
