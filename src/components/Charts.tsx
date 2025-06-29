import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
const data = {
  labels,
  datasets: [
    {
      label: "Vendas 2025",
      data: [1500, 2000, 1800, 2200, 2100, 2500],
      fill: false,
      tension: 0.4,
      borderWidth: 2,
    },
    {
      label: "Receita 2025",
      data: [1200, 1700, 1600, 2000, 1900, 2300],
      fill: false,
      tension: 0.4,
      borderDash: [5, 5],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Comparativo de Vendas x Receita",
    },
  },
};

export default function MyChart() {
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Line data={data} options={options as any} />
    </div>
  );
}
