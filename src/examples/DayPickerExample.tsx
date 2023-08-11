import { Space } from "antd";
import { DayPicker } from "../components/temporal/DayPicker";
import { useState } from "react";
import { LocalDate } from "@js-joda/core";
import { LocaleSwitcher } from "../components/locale-switcher/LocaleSwitcher";
import { useLocale } from "../state/locale/useLocale";

export const DayPickerExamle: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const [date, setDate] = useState<LocalDate | null>(null);

  return (
    <>
      <Space>
        <DayPicker value={date} onChange={setDate} />
        <LocaleSwitcher value={locale} onChange={setLocale} />
      </Space>
      {/* <Space direction="vertical" className="output">
        <p>{`Date (unformatted): ${date?.toString()}`}</p>
        <p>{`Date (formatted): ${date?.toFormattedString(locale)}`}</p>
        <p>{`Error: ${date?.getError()?.message}`}</p>
      </Space> */}
    </>
  );
};
