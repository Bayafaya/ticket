import { Tag as TagAntd, TagProps } from "antd";
import { CheckableTagProps } from "antd/es/tag/CheckableTag";

export const Tag = (props: TagProps) => {
  return <TagAntd {...props} />;
};

export const TagCheckable = (props: CheckableTagProps) => {
  const backgroundColor = props.checked
    ? "var(--mock-color-tag-chackable)"
    : "var(--mock-color-active-chackable)";

  const textColor = props.checked
    ? "var(--mock-color-tag-active-chackable)"
    : "var(--mock-color-chackable)";

  return (
    <TagAntd.CheckableTag
      style={{
        background: backgroundColor,
        color: textColor,
        border: "1px solid var(--mock-color-tag-chackable)",
        borderRadius: 10,
        margin: 0,
      }}
      {...props}
    />
  );
};
