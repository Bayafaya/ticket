import { useTranslations } from "next-intl";

import { Icon } from "@/shared/iconpack";

export const MapLoader = () => {
  const t = useTranslations("general");
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Icon name="logoIcon" className="animate-spin" color="var(--color-brand-primary-1)" size={80} />
      <div className="mt-4 text-center text-lg font-semibold z-10">
        <span className="text-black dark:text-white">{t("loading")}</span>
      </div>
    </div>
  );
};

export default MapLoader;
