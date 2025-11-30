import { Bar } from "react-chartjs-2";

type Props = {
  data: any;
  options: any;
};

export default function BarChart({ data, options }: Props) {
  return (
    <div className="bg-white w-full rounded-lg shadow p-4 flex flex-col mb-2">
      <h3 className="text-lg font-semibold mb-2">Valor por Categoria</h3>
      <div className="w-full h-48">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
