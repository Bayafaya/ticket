import { Form as FormAntd, FormProps, FormItemProps } from "antd";
import { useForm as useFormAntd } from "antd/es/form/Form";
import FormItemAntd from "antd/es/form/FormItem";

import { PropsWithOptionalChildren } from "@/shared/types/PropsWithChildren";

import '../styles/form-label.css'

export const Form = (props: FormProps & PropsWithOptionalChildren) => {
  return <FormAntd requiredMark={(label) => `${label}*`} {...props} />;
};

export const FormItem = (props: FormItemProps & PropsWithOptionalChildren) => {
  return <FormItemAntd className="custom-font-weight" {...props} />;
};

export const useForm = useFormAntd;
