export const getShortDayFormat = (dateFormatter: Locale["formatLong"]) => {
  const defaultFormatInUS = "MM/dd/yyyy";
  return dateFormatter
    ? dateFormatter.date({
        width: "short",
      })
    : defaultFormatInUS;
};
