import { SVGProps } from "../model/types";

const RescheduleIcon = ({ size, color, ...props }: SVGProps) => {
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
        d="M15.5 15L21.5 9M21.5 9L15.5 3M21.5 9H9.5C7.9087 9 6.38258 9.63214 5.25736 10.7574C4.13214 11.8826 3.5 13.4087 3.5 15C3.5 16.5913 4.13214 18.1174 5.25736 19.2426C6.38258 20.3679 7.9087 21 9.5 21H12.5"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RescheduleIcon;
