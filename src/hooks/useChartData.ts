/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";

export function useChartData(transactions: any[], month: string) {
  return useMemo(() => {
    const [year, monthNum] = month.split("-").map(Number);

    const filtered = transactions.filter((tx) => {
      const d = new Date(tx.date);
      return d.getFullYear() === year && d.getMonth() + 1 === monthNum;
    });

    const totals = filtered.reduce(
      (acc, tx) => {
        const key =
          tx.type.charAt(0).toUpperCase() + tx.type.slice(1).toLowerCase();
        acc[key as "Receita" | "Despesa"] =
          (acc[key as "Receita" | "Despesa"] || 0) + tx.amount;
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

    const byCat = filtered.reduce<Record<string, number>>((acc, tx) => {
      const name = tx.category.name;
      acc[name] = (acc[name] || 0) + tx.amount;
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

    const daysInMonth = new Date(year, monthNum, 0).getDate();
    const labels = Array.from({ length: daysInMonth }, (_, i) =>
      String(i + 1).padStart(2, "0")
    );
    const revenue = new Array(daysInMonth).fill(0);
    const expense = new Array(daysInMonth).fill(0);

    filtered.forEach((tx) => {
      const dayIndex = new Date(tx.date).getDate() - 1;
      if (tx.type === "RECEITA") {
        revenue[dayIndex] += tx.amount;
      } else {
        expense[dayIndex] += tx.amount;
      }
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
