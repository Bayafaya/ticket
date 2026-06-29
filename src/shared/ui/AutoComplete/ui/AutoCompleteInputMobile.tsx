"use client";

import { AutoComplete as AntdAutoComplete, Input, InputProps } from "antd";
import type { AutoCompleteProps } from "antd";
import { SearchProps } from "antd/es/input";

import { Icon } from "@/shared/iconpack";

import { Button } from "../../Button/ui/Button";
import usePopupMobile from "../../Popup/libs/useGlobalModal";

type AutoCompleteInputMobileProps = {
  autoCompleteProps?: AutoCompleteProps;
  inputProps?: InputProps & SearchProps;
};

export const AutoCompleteInputMobile = (
  props: AutoCompleteInputMobileProps,
) => {
  const { closeModal: closePopup } = usePopupMobile();

  const { autoCompleteProps, inputProps } = props;
  return (
    <AntdAutoComplete size="large" className="w-full" {...autoCompleteProps}>
      <Input
        size="large"
        prefix={
          <Button
            onClick={closePopup}
            style={{ border: "none" }}
            className="leading-[100%]"
            icon={
              <Icon name="expandBottomIcon" className="rotate-90" size={24} />
            }
          />
        }
        style={{
          borderRadius: "20px",
          height: "40px",
          border: "1px solid black",
        }}
        {...inputProps}
      />
    </AntdAutoComplete>
  );
};
