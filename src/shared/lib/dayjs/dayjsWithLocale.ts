import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import "dayjs/locale/ru";

dayjs.extend(localizedFormat);

export function setDayjsLocale(locale: string) {
  dayjs.locale(locale);
}

export default dayjs;
