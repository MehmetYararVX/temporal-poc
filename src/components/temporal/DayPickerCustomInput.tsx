import { forwardRef } from "react";
import { Button, ButtonProps } from "antd";
import { AiOutlineCalendar } from "react-icons/ai";

export type DayPickerCustomInputProps = ButtonProps;

export const DayPickerCustomInput = forwardRef<
  typeof Button,
  DayPickerCustomInputProps
>(({ onClick }, ref) => (
  <Button className="custom-input" onClick={onClick} ref={ref as never}>
    <AiOutlineCalendar />
  </Button>
));
