import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";
import { NAMESPACES } from "../model/types/i18nTypes";

async function loadNamespaces(locale: string, namespaces: string[]) {
  const messages: Record<string, JSON> = {};

  for (const ns of namespaces) {
    messages[ns] = (await import(`../../../../../../messages/${locale}/${ns}.json`)).default;
  }
  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadNamespaces(locale, NAMESPACES);

  return {
    locale,
    messages,
  };
});
