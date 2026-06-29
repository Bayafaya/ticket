"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { useAuthLoginMutations } from "@/features/Auth";
import { LoginSchema } from "@/features/Auth/model/types/AuthSchema";
import { contactOptions, ContactOptions, ContactsEnum } from "@/shared/consts/contactOptions";
import { Button } from "@/shared/ui/Button";
import { Form, FormItem, FormProps, useForm } from "@/shared/ui/Form";
import { Input, Password } from "@/shared/ui/Input";
import { InputNumber, PhoneInput } from "@/shared/ui/InputNumber";
import { CapsuleSegment } from "@/shared/ui/Segmented/ui/CapsuleSegment";



const LoginForm = () => {
  const t = useTranslations("signIn")
  const [contacntType, setContactType] = useState<ContactOptions['value']>(contactOptions[0].value)
  const loginAuthMutation = useAuthLoginMutations();
  const [form] = useForm<LoginSchema>();

  const onSegmentChange = (value: number) => {
    setContactType(value)
    form.setFieldValue('userName', "")
  }

  const onFinish: FormProps<LoginSchema>["onFinish"] = (data: LoginSchema) => {
    loginAuthMutation.mutate(data);
  };

  const onFinishFailed: FormProps<LoginSchema>["onFinishFailed"] = () => { };

  return (
    <div className="space-y-6! flex flex-col flex-1">
      <CapsuleSegment<ContactOptions['value']>
        block
        className="shadow-capsule-segmentd!"
        value={contacntType}
        options={contactOptions}
        onChange={onSegmentChange}
      />
      <Form
        name="sign-in"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col flex-1"
      >
        <div className="flex-1">
          {
            contacntType === ContactsEnum.PHONE
            && <FormItem
              name="userName"
              label={t('enterSome', { text: t('phoneNumber') })}
              rules={[{ required: true, message: t('pleaseInputUr', { text: t("phoneNumber") }) }]}
            >
              <PhoneInput placeholder="555 555 555" style={{ width: "100%", borderLeft: 'none' }} />
            </FormItem>
          }
          {
            contacntType === ContactsEnum.EMAIL
            && <FormItem
              name="userName"
              label={t('enterSome', { text: t('email') })}
              rules={[{ required: true, message: t('pleaseInputUr', { text: t("email") }) }]}
            >
              <Input placeholder="example@gmail.com" type="email" />
            </FormItem>
          }
          {
            contacntType === ContactsEnum.ID
            && <FormItem
              name="userName"
              label={t('enterSome', { text: t('parnterId') })}
              rules={[{ required: true, message: t('pleaseInputUr', { text: t("parnterId") }) }]}
            >
              <InputNumber
                style={{
                  width: "100%"
                }}
                controls={false}
                placeholder="818188181"
              />
            </FormItem>
          }
          <FormItem
            label={t('enterSome', { text: t('password').toLocaleLowerCase() })}
            name="password"
            rules={[{ required: true, message: t('pleaseInputUr', { text: t('password').toLocaleLowerCase() }) }]}
          >
            <Password placeholder={t('password')} />
          </FormItem>
        </div>
        <FormItem>
          <Button type="primary" block htmlType="submit">
            {"Login"}
          </Button>
        </FormItem>
      </Form >
    </div >

  );
};

export default LoginForm;
