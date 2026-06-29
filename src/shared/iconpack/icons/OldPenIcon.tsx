import { SVGProps } from "../model/types";

const OldPenIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 2.66226C8 2.66226 5.33333 21.3289 4 29.3289C4.88889 29.3289 5.777 29.3289 6.66432 29.3289C7.55228 24.8848 9.77528 22.4404 13.3333 21.9956C18.6667 21.3289 22.6667 16.6623 24 12.6623L22 11.3289C22.4444 10.8845 22.8889 10.44 23.3333 9.9956C24.6667 8.66226 26.0056 6.66226 28 2.66226Z"
        fill={color || "currentColor"}
      />
      <path
        d="M7.33331 29.3333C7.33331 29.3333 12.22 30.368 15.3333 30C18.0327 29.6809 22 28 22 28"
        stroke={color || "currentColor"}
      />
    </svg>
  );
};

export default OldPenIcon;
