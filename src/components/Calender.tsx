"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function Calender() {
  const [month, setMonth] = useState<Date | null>(null);
  return (
    <DayPicker
      month={month || new Date()}
      onMonthChange={setMonth}
      animate
      mode="multiple"
    />
  );
}
