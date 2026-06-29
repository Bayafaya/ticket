import { PropsWithOptionalChildren } from "@/shared/types/PropsWithChildren";

import { FormItem, FormItemProps } from "../index";

type FormItemPhoneValidator = {
  requiredText: string;
  validatorText: string;
} & FormItemProps &
  PropsWithOptionalChildren;

export const FormItemPhoneValidator = (props: FormItemPhoneValidator) => {
  const { requiredText, validatorText, children, ...otherProps } = props;
  return (
    <FormItem
      {...otherProps}
      rules={[
        { required: true, message: requiredText },
        {
          type: "number",
          message: validatorText,
          validator: (_, value) => {
            if (!value) return Promise.resolve();
            const digits = (value.toString() || "").replace(/\D/g, "");
            if (digits.length !== 9) {
              return Promise.reject(validatorText);
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      {children}
    </FormItem>
  );
};
