import { Transaction } from '../entities/Transaction';

/**
 * Domain Service: Pure business logic for aggregating transaction data
 * No UI concerns, no frameworks - just data transformation
 */
export class TransactionAggregator {
  /**
   * Filter transactions by month
   */
  filterByMonth(transactions: Transaction[], year: number, month: number): Transaction[] {
    return transactions.filter((tx) => tx.isInMonth(year, month));
  }

  /**
   * Calculate total receita and despesa
   */
  calculateTotals(transactions: Transaction[]) {
    return transactions.reduce(
      (acc, tx) => {
        const amount = parseFloat(tx.amount);
        acc.receita += tx.isReceita() ? amount : 0;
        acc.despesa += tx.isDespesa() ? amount : 0;
        return acc;
      },
      { receita: 0, despesa: 0 }
    );
  }

  /**
   * Aggregate by category
   */
  aggregateByCategory(transactions: Transaction[]) {
    const categoryMap = new Map<string, { receita: number; despesa: number }>();

    transactions.forEach((tx) => {
      const name = tx.categoryName || 'Sem categoria';
      const entry = categoryMap.get(name) || { receita: 0, despesa: 0 };

      const amount = parseFloat(tx.amount) || 0;

      if (tx.isReceita()) {
        entry.receita += amount;
      } else {
        entry.despesa += amount;
      }

      categoryMap.set(name, entry);
    });

    return Array.from(categoryMap.entries()).map(([name, data]) => ({
      category: name,
      ...data,
    }));
  }


  /**
   * Aggregate by day
   */
  aggregateByDay(transactions: Transaction[], daysInMonth: number) {
    const dailyData = Array.from({ length: daysInMonth }, () => ({ receita: 0, despesa: 0 }));

    transactions.forEach((tx) => {
      const dayIndex = tx.date.getDate() - 1;
      if (dayIndex >= 0 && dayIndex < daysInMonth) {
        const amount = parseFloat(tx.amount) || 0; // converte string para número

        if (tx.isReceita()) {
          dailyData[dayIndex].receita += amount;
        } else {
          dailyData[dayIndex].despesa += amount;
        }
      }
    });

    return dailyData;
  }

}
