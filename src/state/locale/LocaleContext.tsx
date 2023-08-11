import React, { PropsWithChildren, createContext, useState } from "react";
import { SupportedLocale } from "../../i18n/locale";

export interface ILocaleContext {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: "en-US",
  setLocale: () => {},
});

export const LocaleContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [locale, setLocale] = useState<SupportedLocale>("en-US");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
