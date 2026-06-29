"use client";

import { Icon } from "@/shared/iconpack";
import { useI18nRouter } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/Button";

type GoBackButtonProps = {
  onClick?: () => void;
};

export const GoBackButton = ({ onClick }: GoBackButtonProps) => {
  const { back } = useI18nRouter();

  return (
    <Button icon={<Icon name="arrowIcon" color="var(--color-brand-primary-1)"/>} onClick={onClick ? onClick : back} type="text" className="!p-0 shadow-back-button" />
  );
};
