/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

type Props = {
  data: any;
  options: any;
  month: string;
};

function useMonthYear(month: string) {
  return useMemo(() => {
    const [year, m] = month.split("-");
    return `${m}/${year}`;
  }, [month]);
}
export default function LineChart({ data, options, month }: Props) {
  const formatted = useMonthYear(month);
  return (
    <div className="bg-white w-full rounded-lg shadow p-4 flex flex-col mb-2">
      <h3 className="text-lg font-semibold mb-2">Evolução em {formatted}</h3>
      <div className="w-full h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
