import { SVGProps } from "../model/types";

const StarFilledIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.394 1.60499C5.618 1.06649 6.382 1.06649 6.606 1.60499L7.647 4.10799L10.349 4.32499C10.931 4.37149 11.167 5.09749 10.7235 5.47749L8.665 7.24099L9.2935 9.87749C9.429 10.4455 8.8115 10.894 8.3135 10.59L6 9.17699L3.6865 10.59C3.1885 10.894 2.571 10.445 2.7065 9.87749L3.335 7.24099L1.2765 5.47749C0.833001 5.09749 1.069 4.37149 1.651 4.32499L4.353 4.10799L5.394 1.60499Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};

export default StarFilledIcon;
