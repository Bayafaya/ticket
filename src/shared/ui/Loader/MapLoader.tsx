import { Spin } from "antd";
import { useTranslations } from "next-intl";

export const MapLoader = () => {
  const t = useTranslations("general");
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Spin />
      <div className="mt-4 text-center text-lg font-semibold z-10">
        <span className="text-black dark:text-white">{t("loading")}</span>
      </div>
    </div>
  );
};

export default MapLoader;
