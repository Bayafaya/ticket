import { Card as CardAnd, CardProps } from "antd";
import Meta from "antd";

const Card = ({ children, ...otherProps }: CardProps) => {
  return <CardAnd {...otherProps}>{children}</CardAnd>;
};

export { Card, Meta };
