import React from "react";
import { Select } from "antd";
import { SupportedLocale, supportedLocales } from "../../i18n/locale";

interface LocaleSwitcherProps {
  value: SupportedLocale;
  onChange: (value: SupportedLocale) => void;
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  value,
  onChange,
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={supportedLocales.map((supportedLocale) => ({
        value: supportedLocale,
        label: supportedLocale,
      }))}
    />
  );
};
