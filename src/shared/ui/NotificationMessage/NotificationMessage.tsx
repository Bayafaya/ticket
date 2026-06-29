import { ComponentProps } from "react";

type NotificationMessageProps = {
    isVisible: boolean;
} & ComponentProps<"div">;

export const NotificationMessage = (props: NotificationMessageProps) => {
  const { isVisible, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={`fixed bottom-[108px] left-1/2 transition-all translate-x-[-50%]
      w-[350px] p-4 rounded-4xl duration-300
      bg-black text-white dark:bg-white dark:text-black
      text-center text-sm font-normal leading-3.5 z-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  );
};

