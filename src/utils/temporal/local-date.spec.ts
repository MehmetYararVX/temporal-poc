import { LocalDate } from "@js-joda/core";
import { convertJSDateToLocalDate } from "./local-date";
import { it, expect } from "vitest";

const getADayWith24Hours = (dayString: string) =>
  Array.from(
    { length: 24 },
    (_, i) => new Date(`${dayString}T${i < 10 ? `0${i}` : i}:00:00.000Z`)
  );

interface TestCase {
  date: Date;
  expected: LocalDate;
}

const day = "2021-01-01";
const testCases = getADayWith24Hours(day).map<TestCase>((date) => ({
  date,
  expected: LocalDate.parse(day),
}));

it.each<TestCase>(testCases)(
  `it should convert $date to LocalDate correctly`,
  ({ date, expected }) => {
    // Act
    const output = convertJSDateToLocalDate(date);

    console.log({
      date,
      output,
      expected,
    });

    // Assert
    expect(output).toEqual(expected);
  }
);
