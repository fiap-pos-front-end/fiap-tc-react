type Props = {
  month: string;
  onChange: (m: string) => void;
};

export default function MonthPicker({ month, onChange }: Props) {
  return (
    <div className="mb-2 flex flex-col">
      <input
        id="month"
        type="month"
        value={month}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          px-3 py-2
          border border-gray-300 rounded-lg shadow-sm
          bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-colors duration-200
        "
      />
    </div>
  );
}
