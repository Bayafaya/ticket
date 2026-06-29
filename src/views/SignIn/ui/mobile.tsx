import { useTranslations } from "next-intl";

import { GoBackButton } from "@/features/GoBack";
import { TypographyTitle } from "@/shared/ui/Typography";
import LoginForm from "@/widgets/LoginForm/ui/LoginForm";

export const MobileSignInPage = () => {
  const t = useTranslations('signIn')
  return (
    <div className="p-4 space-y-8 h-full flex flex-col">
      <GoBackButton />
      <div className="space-y-8! flex flex-col flex-1">
        <TypographyTitle level={1}>{t("signIn")}</TypographyTitle>
        <LoginForm />
      </div>
    </div>
  );
};
