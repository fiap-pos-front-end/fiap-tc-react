import ChartsPage from "./pages/ChartsPage";
import { transactions } from "./data/transactions";

export default function ReactPage() {
  return (
    <div className="flex flex-col h-full">
      <ChartsPage transactions={transactions} />
    </div>
  );
}
