import { format, parse } from "date-fns";
import { SupportedLocale, localeMap } from "../../i18n/locale";
import { getShortDayFormat } from "../formatter/day-formatter";

export function parseDate(dateString: string, locale: SupportedLocale): Date {
  const dateFormatter = localeMap[locale].formatLong;
  const dateFormat = getShortDayFormat(dateFormatter);
  return parse(dateString, dateFormat, new Date());
}

export function formatDate(date: Date, locale: SupportedLocale): string {
  const dateFormatter = localeMap[locale].formatLong;
  const dateFormat = getShortDayFormat(dateFormatter);
  return format(date, dateFormat);
}
