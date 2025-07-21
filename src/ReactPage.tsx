import { useEffect, useState } from "react";
import ChartsPage from "./pages/ChartsPage";
import {
  EVENTS,
  Transaction,
  onEvent,
} from "@fiap-pos-front-end/fiap-tc-shared";

export default function ReactPage() {
  const [transactions, setTransactionsState] = useState<Transaction[]>([]);

  useEffect(() => {
    onEvent(EVENTS.TRANSACTIONS_UPDATED, (newTxs) => {
      setTransactionsState(newTxs);
    });
  }, []);

  return (
    <div className="flex flex-col h-full">
      <ChartsPage transactions={transactions} />
    </div>
  );
}
