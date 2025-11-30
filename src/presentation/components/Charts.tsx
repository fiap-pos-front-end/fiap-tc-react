import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { useChartData } from '../hooks/useChartData';
import BarChart from './BarChart';
import LineChart from './LineChart';
import MonthPicker from './MonthPicker';
import PieChart from './PieChart';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

export default function Charts() {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  });

  // All business logic is now in the use case!
  const { pieData, barData, lineData } = useChartData(month);

  // Check if data is empty
  const isPieEmpty = pieData.datasets[0].data.every((v: number) => v === 0);
  const isBarEmpty =
    barData.labels.length === 0 || barData.datasets.every((ds) => ds.data.every((v: number) => v === 0));
  const isLineEmpty = lineData.datasets.every((ds: any) => ds.data.every((v: number) => v === 0));

  if (isPieEmpty || isBarEmpty || isLineEmpty) {
    return (
      <div className='flex flex-col h-full'>
        <div className='w-full space-y-6'>
          <MonthPicker month={month} onChange={setMonth} />
          <div className='w-full py-8 text-center text-gray-500'>
            Não há dados disponíveis para o mês selecionado...
          </div>
        </div>
      </div>
    );
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const },
    },
  };

  const barOptions = {
    ...pieOptions,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  const lineOptions = pieOptions;

  return (
    <div className='flex flex-col h-full'>
      <div className='w-full space-y-6'>
        <MonthPicker month={month} onChange={setMonth} />

        <div className='h-64'>
          <PieChart data={pieData} options={pieOptions} />
        </div>

        <div className='h-64'>
          <BarChart data={barData} options={barOptions} />
        </div>

        <div className='h-64'>
          <LineChart data={lineData} options={lineOptions} month={month} />
        </div>
      </div>
    </div>
  );
}
