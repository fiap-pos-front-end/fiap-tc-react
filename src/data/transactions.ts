export type TransactionType = "Receita" | "Despesa";

export type Transaction = {
  date: string; // formato "YYYY-MM-DD"
  type: TransactionType;
  category: string;
  value: number;
};

export const transactions: Transaction[] = [
  { date: "2025-07-01", type: "Receita", category: "Salário", value: 100 },
  { date: "2025-07-03", type: "Despesa", category: "Alimentação", value: 200 },
  { date: "2025-07-05", type: "Receita", category: "Proventos", value: 300 },
  { date: "2025-07-07", type: "Despesa", category: "Transporte", value: 50 },
  { date: "2025-07-10", type: "Despesa", category: "Lazer", value: 150 },
  { date: "2025-07-12", type: "Receita", category: "Freelance", value: 500 },
  { date: "2025-07-15", type: "Despesa", category: "Saúde", value: 80 },
  {
    date: "2025-07-18",
    type: "Receita",
    category: "Investimentos",
    value: 200,
  },
  { date: "2025-07-20", type: "Despesa", category: "Educação", value: 120 },
  { date: "2025-07-25", type: "Despesa", category: "Aluguel", value: 1000 },
  { date: "2025-07-30", type: "Receita", category: "Bônus", value: 250 },
];
