import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChartsPage from "./pages/ChartsPage";
import {
  EVENTS,
  Transaction,
  onEvent,
} from "@fiap-pos-front-end/fiap-tc-shared";
import AboutUs from "./pages/AboutUs";

export default function ReactPage() {
  return (
    <Routes>
      <Route path="/" element={<ChartsPageWrapper />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
    </Routes>
  );
}

function ChartsPageWrapper() {
  const [transactions, setTransactionsState] = useState<Transaction[]>([]);

  useEffect(() => {
    onEvent(EVENTS.TRANSACTIONS_UPDATED, (newTxs) => {
      setTransactionsState(newTxs);
    });
  }, [transactions]);

  return (
    <div className="flex flex-col h-full">
      <ChartsPage transactions={transactions} />
    </div>
  );
}
