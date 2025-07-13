/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useMemo } from "react";
import type { Transaction } from "../data/transactions";

export function useChartData(transactions: Transaction[], month: string) {
  return useMemo(() => {
    const [year, monthNum] = month.split("-").map(Number);
    const filtered = transactions.filter((tx) => {
      const d = new Date(tx.date);
      return d.getFullYear() === year && d.getMonth() + 1 === monthNum;
    });

    // PIE
    const totals = filtered.reduce(
      (acc, tx) => {
        acc[tx.type] += tx.value;
        return acc;
      },
      { Receita: 0, Despesa: 0 }
    );
    const pieData = {
      labels: ["Receita", "Despesa"],
      datasets: [
        {
          data: [totals.Receita, totals.Despesa],
          backgroundColor: ["#4ade80", "#f87171"],
        },
      ],
    };

    // BAR
    const byCat = filtered.reduce<Record<string, number>>((acc, tx) => {
      acc[tx.category] = (acc[tx.category] || 0) + tx.value;
      return acc;
    }, {});
    const barData = {
      labels: Object.keys(byCat),
      datasets: [
        {
          label: "R$",
          data: Object.values(byCat),
          backgroundColor: "#38bdf8",
        },
      ],
    };

    // LINE
    const daysInMonth = new Date(year, monthNum, 0).getDate();
    const labels = Array.from({ length: daysInMonth }, (_, i) =>
      String(i + 1).padStart(2, "0")
    );
    const revenue = new Array(daysInMonth).fill(0);
    const expense = new Array(daysInMonth).fill(0);
    filtered.forEach((tx) => {
      const day = new Date(tx.date).getDate() - 1;
      tx.type === "Receita"
        ? (revenue[day] += tx.value)
        : (expense[day] += tx.value);
    });
    const lineData = {
      labels,
      datasets: [
        {
          label: "Receita",
          data: revenue,
          borderColor: "#4ade80",
          tension: 0.4,
          fill: false,
        },
        {
          label: "Despesa",
          data: expense,
          borderColor: "#f87171",
          tension: 0.4,
          fill: false,
        },
      ],
    };

    return { pieData, barData, lineData };
  }, [transactions, month]);
}
