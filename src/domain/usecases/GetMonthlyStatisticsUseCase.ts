import { TransactionRepository } from '../repositories/TransactionRepository';
import { TransactionAggregator } from '../services/TransactionAggregator';

/**
 * Use Case: Get aggregated transaction data for charts
 * Returns domain data (not chart-specific format)
 */
export class GetMonthlyStatisticsUseCase {
  constructor(
    private repository: TransactionRepository,
    private aggregator: TransactionAggregator,
  ) {}

  execute(year: number, month: number) {
    // 1. Get and filter transactions
    const allTransactions = this.repository.getAll();
    const monthTransactions = this.aggregator.filterByMonth(allTransactions, year, month);

    // 2. Aggregate data (pure domain logic)
    const totals = this.aggregator.calculateTotals(monthTransactions);
    const byCategory = this.aggregator.aggregateByCategory(monthTransactions);
    const daysInMonth = new Date(year, month, 0).getDate();
    const byDay = this.aggregator.aggregateByDay(monthTransactions, daysInMonth);

    // 3. Return domain data (presentation will format it)
    return {
      totals,
      byCategory,
      byDay,
    };
  }
}

