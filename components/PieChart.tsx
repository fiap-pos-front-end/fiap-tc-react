import { Pie } from "react-chartjs-2";

type Props = {
  data: any;
  options: any;
};

export default function PieChart({ data, options }: Props) {
  return (
    <div className="bg-white w-full rounded-lg shadow p-4 flex flex-col mb-2">
      <h3 className="text-lg font-semibold mb-2">Receita vs Despesa</h3>
      <div className="w-full h-48">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
