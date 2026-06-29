
import { useTranslations } from 'next-intl';

import { TypographyText } from '../Typography'

export const NoAvailableTime = () => {
  const t = useTranslations("book");
  return (
    <div className="bg-background-5 py-3 text-center rounded">
      <TypographyText className="!text-brand-primary-disable">{t('noAvailableTime')}</TypographyText>
    </div>
  )
}
