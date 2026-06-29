"use client";

import { AutoComplete as AntdAutoComplete, Input, InputProps } from "antd";
import type { AutoCompleteProps } from "antd";

import { Icon } from "@/shared/iconpack";

type AutoCompleteMobileProps = {
  autoCompleteProps?: AutoCompleteProps;
  inputProps?: InputProps;
};

export const AutoCompleteMobile = (props: AutoCompleteMobileProps) => {
  const { Search } = Input;
  const { autoCompleteProps, inputProps } = props;
  return (
    <AntdAutoComplete size="large" className="w-full" {...autoCompleteProps}>
      <Search
        variant="filled"
        size="large"
        style={{
          background: "var(--color-banner-mock)",
          borderRadius: "8px",
        }}
        enterButton={<Icon name="searchIcon" color="black" />}
        {...inputProps}
      />
    </AntdAutoComplete>
  );
};
