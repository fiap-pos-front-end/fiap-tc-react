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
        acc.receita += tx.isReceita() ? tx.amount : 0;
        acc.despesa += tx.isDespesa() ? tx.amount : 0;
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

      if (tx.isReceita()) {
        entry.receita += tx.amount;
      } else {
        entry.despesa += tx.amount;
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
        if (tx.isReceita()) {
          dailyData[dayIndex].receita += tx.amount;
        } else {
          dailyData[dayIndex].despesa += tx.amount;
        }
      }
    });

    return dailyData;
  }
}
