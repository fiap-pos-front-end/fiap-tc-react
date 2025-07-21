/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Transaction } from "@fiap-pos-front-end/fiap-tc-shared";
import { useChartData } from "../hooks/useChartData";
import MonthPicker from "../components/MonthPicker";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import { useState } from "react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  transactions: Transaction[];
};

export default function ChartsPage({ transactions }: Props) {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });

  const { pieData, barData, lineData } = useChartData(transactions, month);

  const isPieEmpty = pieData.datasets[0].data.every((v: number) => v === 0);
  const isBarEmpty =
    barData.labels.length === 0 ||
    barData.datasets[0].data.every((v: number) => v === 0);
  const isLineEmpty = lineData.datasets.every((ds: any) =>
    ds.data.every((v: number) => v === 0)
  );

  if (isPieEmpty || isBarEmpty || isLineEmpty) {
    return (
      <div className="w-full space-y-6">
        <MonthPicker month={month} onChange={setMonth} />
        <div className="w-full py-8 text-center text-gray-500">
          Não há dados disponíveis para o mês selecionado...
        </div>
      </div>
    );
  }

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };

  return (
    <div className="w-full space-y-6">
      <MonthPicker month={month} onChange={setMonth} />

      <div className="h-64">
        <PieChart data={pieData} options={options} />
      </div>

      <div className="h-64">
        <BarChart data={barData} options={options} />
      </div>

      <div className="h-64">
        <LineChart data={lineData} options={options} month={month} />
      </div>
    </div>
  );
}
