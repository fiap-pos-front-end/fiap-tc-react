import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import Flatpickr from "react-flatpickr";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/plugins/monthSelect/style.css";
import "flatpickr/dist/flatpickr.css";

import { useMemo } from "react";

type Props = {
  month: string;
  onChange: (m: string) => void;
};

export default function MonthPicker({ month, onChange }: Props) {
  const selectedDate = useMemo(() => {
    const [y, m] = month.split("-").map(Number);
    return new Date(y, m - 1, 1);
  }, [month]);

  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor="month" className="mb-1 font-medium">
        Selecione mês
      </label>
      <Flatpickr
        id="month"
        value={selectedDate}
        options={{
          locale: Portuguese,
          dateFormat: "Y-m",
          altInput: true,
          altFormat: "F Y",
          defaultDate: selectedDate,
          plugins: [
            monthSelectPlugin({
              shorthand: false,
              dateFormat: "Y-m",
              altFormat: "F Y",
            }),
          ],
        }}
        onChange={(dates: Date[]) => {
          const d = dates[0];
          if (!d) return;
          const y = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, "0");
          onChange(`${y}-${mm}`);
        }}
        className="
          w-full px-3 py-2
          border border-gray-300 rounded-lg shadow-sm
          bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors duration-200
        "
      />
    </div>
  );
}
