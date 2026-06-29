"use client";

import { Space } from "antd";

import { InputNumber, InputNumberProps } from "@/shared/ui/InputNumber";
import { Select, SelectProps } from "@/shared/ui/Select";



export const PhoneInput = (props: InputNumberProps) => {

  return (
    <Space.Compact block className="
    [&:focus-within_.ant-select]:border-brand-secondary-1!
    [&:focus-within_.ant-input-number]:border-brand-secondary-1!
  ">

      <PhoneInputCodeSelect />

      <InputNumber
        {...props}
        type="text"
        controls={false}
        styles={{
          root: {
            boxShadow: "none",
            paddingLeft: 0
          }
        }}
        inputMode="numeric"
        formatter={(value) => {
          const digits = (value as string)?.replace(/\D/g, "").slice(0, 9);

          const code = digits.slice(0, 3);
          const part1 = digits.slice(3, 9);

          let formatted = "";

          if (code) formatted += `(${code}`;
          if (code.length === 3) formatted += ")";
          if (part1) formatted += ` ${part1}`;

          return formatted;
        }}
        parser={(value) => {
          const digits = value?.replace(/\D/g, "") || "";
          return digits.slice(0, 9);
        }}
      />
    </Space.Compact>
  );
};

const data = [
  { value: '+996', label: '+996' },
]

export const PhoneInputCodeSelect = (props: SelectProps) => {
  return (
    <Select
      style={{
        borderRadius: "var(--radius-primary-button) 0px 0px var(--radius-primary-button)",
        width: "fit-content",
        paddingLeft: "20px",
        boxShadow: 'none',
        borderRight: "none"
      }}
      value={data[0]}
      options={data}
      {...props}
    />
  );
};
