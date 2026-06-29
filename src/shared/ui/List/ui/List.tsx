import { List as ListAntd, ListProps } from "antd";
import ListItemAntd, { ListItemProps } from "antd/es/list/Item";


export type { ListProps, ListItemProps };

export const List = <T,>(props: ListProps<T>) => {
  return <ListAntd {...props} />;
};

export const ListItem = (props: ListItemProps) => {
  return <ListItemAntd {...props} />;
};
