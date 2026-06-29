import { SVGProps } from "../model/types";

const PendingIcon = ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6849 6.73294H14.0129L11.8922 4.61094C11.2094 3.92818 10.359 3.4372 9.42633 3.18734C8.49367 2.93748 7.51166 2.93755 6.57903 3.18755C5.64641 3.43755 4.79603 3.92866 4.11339 4.61152C3.43074 5.29437 2.9399 6.1449 2.69019 7.0776M1.99285 13.5969V10.2689M1.99285 10.2689H5.32085M1.99285 10.2689L4.11285 12.3909C4.7956 13.0737 5.64605 13.5647 6.57871 13.8145C7.51138 14.0644 8.49338 14.0643 9.42601 13.8143C10.3586 13.5643 11.209 13.0732 11.8917 12.3904C12.5743 11.7075 13.0651 10.857 13.3149 9.92427M14.0129 3.40494V6.7316"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PendingIcon;
