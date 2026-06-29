'use client'
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Icon } from "@/shared/iconpack";
import { ROUTES, useI18nRouter } from "@/shared/lib/routes";
import { Button, GoogleAuthButton } from "@/shared/ui/Button";
import { Divider } from "@/shared/ui/Divider";
import { TypographyParagraph, TypographyTitle } from "@/shared/ui/Typography";
import KGFlag from "@public/assets/flags/kyrgyzstan.png";
import RuFlag from "@public/assets/flags/russia.png";

const contact = [
  {
    flag: KGFlag,
    number: process.env.NEXT_PUBLIC_CONTACTS_KG
  },
  {
    flag: RuFlag,
    number: process.env.NEXT_PUBLIC_CONTACTS_RU
  },
]

export const MobileWelcomePage = () => {
  const t = useTranslations("welcome");
  const { push } = useI18nRouter()

  const goSignIn = () => {
    push(ROUTES.signIn)
  }

  const goSignUp = () => {
    push(ROUTES.signUp)
  }

  return (
    <div className="mx-4 flex flex-col items-center justify-between h-full">
      <div />
      <div>
        <div className="space-y-3!">
          <TypographyTitle level={1} className="text-text-primary-1! text-center">
            {t("signIn")}
          </TypographyTitle>
          <div className="flex gap-1 justify-center">
            <TypographyParagraph className="text-brand-secondary-2!">
              {t("noAccount")}
            </TypographyParagraph>
            <TypographyParagraph onClick={goSignUp} className="text-brand-primary-1! font-semibold!">
              {t("register")}
            </TypographyParagraph>
          </div>
        </div>
        <Button type="primary" block className="mt-6!" onClick={goSignIn}>
          {t("buttonText")}
        </Button>
        <Divider plain className="my-8!"><TypographyParagraph className="text-brand-secondary-2! ">{t("or")}</TypographyParagraph></Divider>
        <div className="space-y-3">
          <GoogleAuthButton disabled block icon={<Icon name="googleLogoIcon" className='mb-1!' size={20} />}>
            {t("signInWith", {companyName: "Google"})}
          </GoogleAuthButton>
          <GoogleAuthButton disabled block icon={<Icon name="faceBookLogoIcon" className='mb-1!' size={20} />}>
            {t("signInWith", {companyName: "Facebook"})}
          </GoogleAuthButton>
        </div>
      </div>
      <div className="mb-10">
        <TypographyParagraph size="sm" className="font-semibold! text-center">
          {t("needHelp")}
        </TypographyParagraph>
        <Divider className="my-3!" />
        <div className="space-y-2!">
          {contact.map((country) => (
            <a key={country.number} className="flex items-center gap-3" href={`https://wa.me/${country.number}`}>
              <Image src={country.flag} alt="flag of kg" className="w-5 aspect-square object-cover rounded-full" />
              <TypographyParagraph className="text-link!">{country.number}</TypographyParagraph>
            </a>
          ))
          }
        </div>
      </div>
    </div>
  );
};
