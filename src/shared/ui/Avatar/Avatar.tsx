import { Avatar as AvatarAntd, AvatarProps } from "antd";
import AvatarGroupAntd, { AvatarGroupProps } from "antd/es/avatar/AvatarGroup";

const Avatar = ({ ...props }: AvatarProps) => {
  return <AvatarAntd {...props} />;
};

const AvatarGroup = ({ ...props }: AvatarGroupProps) => {
  return <AvatarGroupAntd {...props} />;
};

export type { AvatarProps, AvatarGroupProps };

export { Avatar, AvatarGroup };
