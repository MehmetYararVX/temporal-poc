import { enGB, enUS } from "date-fns/locale";

export const supportedLocales = ["en-US", "en-GB"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const localeMap: Record<SupportedLocale, Locale> = {
  "en-US": enUS,
  "en-GB": enGB,
};
