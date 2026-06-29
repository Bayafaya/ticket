import { SVGProps } from "../model/types";

const CircleOutline = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="23.25"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
      />
      <path
        d="M36.0229 29.3479H41.0149L37.8339 26.1649C36.8098 25.1408 35.5341 24.4043 34.1351 24.0295C32.7361 23.6548 31.2631 23.6549 29.8642 24.0299C28.4652 24.4049 27.1896 25.1415 26.1657 26.1658C25.1417 27.1901 24.4054 28.4659 24.0309 29.8649M22.9849 39.6439V34.6519M22.9849 34.6519H27.9769M22.9849 34.6519L26.1649 37.8349C27.189 38.8591 28.4647 39.5955 29.8637 39.9703C31.2627 40.3451 32.7357 40.345 34.1346 39.97C35.5336 39.595 36.8091 38.8584 37.8331 37.8341C38.8571 36.8098 39.5933 35.534 39.9679 34.1349M41.0149 24.3559V29.3459"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleOutline;
