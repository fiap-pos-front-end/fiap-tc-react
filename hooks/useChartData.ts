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

    const categoryMap = new Map<string, { Receita: number; Despesa: number }>();

    filtered.forEach((tx) => {
      const name = tx.category?.name || "Sem categoria";
      const entry = categoryMap.get(name) || { Receita: 0, Despesa: 0 };
      entry[tx.type as "Receita" | "Despesa"] += tx.amount;
      categoryMap.set(name, entry);
    });

    const categoryLabels = Array.from(categoryMap.keys());
    const receitaData = categoryLabels.map(
      (cat) => categoryMap.get(cat)?.Receita ?? 0
    );
    const despesaData = categoryLabels.map(
      (cat) => categoryMap.get(cat)?.Despesa ?? 0
    );

    const barData = {
      labels: categoryLabels,
      datasets: [
        {
          label: "Receita",
          data: receitaData,
          backgroundColor: "#4ade80",
          stack: "total",
        },
        {
          label: "Despesa",
          data: despesaData,
          backgroundColor: "#f87171",
          stack: "total",
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
      if (tx.type === "Receita") {
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
