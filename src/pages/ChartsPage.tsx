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
import type { Transaction } from "../data/transactions";
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

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };

  return (
    <div className="w-full">
      <MonthPicker month={month} onChange={setMonth} />
      <PieChart data={pieData} options={options} />
      <BarChart data={barData} options={options} />
      <LineChart data={lineData} options={options} month={month} />
    </div>
  );
}
