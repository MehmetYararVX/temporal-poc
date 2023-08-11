import { DateTimeFormatter, LocalDate, convert, nativeJs } from "@js-joda/core";
import { SupportedLocale, localeMap } from "../../i18n/locale";
import { getShortDayFormat } from "../formatter/day-formatter";

export function formatLocalDate(
  temporal: LocalDate,
  locale: SupportedLocale
): string {
  const dateFormatter = localeMap[locale].formatLong;
  const dateFormat = getShortDayFormat(dateFormatter);
  return temporal.format(DateTimeFormatter.ofPattern(dateFormat));
}

export function convertJSDateToLocalDate(date: Date): LocalDate {
  // Problem with timezones
  // Run `yarn test` if you could see failing tests
  const temporal = nativeJs(date);

  // Solution:
  // Uncomment the following and run `yarn test` to see if tests are passing
  // const temporal = nativeJs(date, ZoneId.UTC).withFixedOffsetZone();

  return temporal.toLocalDate();
}

export function convertLocalDateToJSDate(temporal: LocalDate): Date {
  return convert(temporal).toDate();
}
