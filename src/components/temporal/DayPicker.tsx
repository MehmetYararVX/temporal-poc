import React, { useEffect, useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Input, Space } from "antd";
import type { InputProps } from "antd";
import { LocalDate } from "@js-joda/core";
import { DayPickerCustomInput } from "./DayPickerCustomInput";

import { useLocale } from "../../state/locale/useLocale";
import {
  convertJSDateToLocalDate,
  convertLocalDateToJSDate,
  formatDate,
  formatLocalDate,
  parseDate,
} from "../../utils";

interface DayPickerProps {
  value: LocalDate | null;
  onChange: (value: LocalDate | null) => void;
}

export const DayPicker: React.FC<DayPickerProps> = ({ value, onChange }) => {
  const { locale } = useLocale();
  const [inputValue, setInputValue] = useState<string | undefined>(
    value ? formatLocalDate(value, locale) : ""
  );
  const [pickerValue, setPickerValue] = useState<Date | null>(
    value ? convertLocalDateToJSDate(value) : null
  );

  const handleInputChange: InputProps["onChange"] = (e) => {
    const stringValue = e.target.value;
    const parsedDate = parseDate(stringValue, locale);
    const temporal = convertJSDateToLocalDate(parsedDate);

    console.log("handleInputChange", {
      value: stringValue,
      parsedDate,
      temporal,
    });

    setInputValue(e.target.value);
    setPickerValue(parsedDate);
    onChange(temporal);
  };
  const handlePickerSelect: ReactDatePickerProps["onSelect"] = (date) => {
    const formattedDate = formatDate(date, locale);
    const temporal = convertJSDateToLocalDate(date);

    console.log("handlePickerSelect", {
      value: date,
      formattedDate,
      temporal,
    });

    setPickerValue(date);
    setInputValue(formattedDate);
    onChange(temporal);
  };

  useEffect(() => {
    if (value) {
      setInputValue(formatLocalDate(value, locale));
      setPickerValue(convertLocalDateToJSDate(value));
    }
  }, [locale, value]);

  return (
    <Space direction="vertical" size="middle" className="input">
      <Space.Compact style={{ width: "100%" }}>
        <Input value={inputValue} onChange={handleInputChange} />
        <DatePicker
          selected={pickerValue}
          onChange={handlePickerSelect}
          customInput={<DayPickerCustomInput />}
        />
      </Space.Compact>
    </Space>
  );
};
