import { useMemo } from 'react';
import { GetMonthlyStatisticsUseCase } from '../../domain/usecases/GetMonthlyStatisticsUseCase';
import { TransactionAggregator } from '../../domain/services/TransactionAggregator';
import { EventBasedTransactionRepository } from '../../infra/repositories/EventBasedTransactionRepository';

// Simple DI - create instances once
const repository = new EventBasedTransactionRepository();
const aggregator = new TransactionAggregator();
const useCase = new GetMonthlyStatisticsUseCase(repository, aggregator);

/**
 * Hook that connects domain use case to React components
 * Also handles Chart.js formatting (presentation concern)
 */
export function useChartData(month: string) {
  return useMemo(() => {
    const [year, monthNum] = month.split('-').map(Number);

    // Get domain data
    const { totals, byCategory, byDay } = useCase.execute(year, monthNum);

    // Format for Chart.js (presentation concern - stays in hook)
    const pieData = {
      labels: ['Receita', 'Despesa'],
      datasets: [{
        data: [totals.receita, totals.despesa],
        backgroundColor: ['#4ade80', '#f87171'],
      }],
    };

    const barData = {
      labels: byCategory.map((d) => d.category),
      datasets: [
        {
          label: 'Receita',
          data: byCategory.map((d) => d.receita),
          backgroundColor: '#4ade80',
          stack: 'total',
        },
        {
          label: 'Despesa',
          data: byCategory.map((d) => d.despesa),
          backgroundColor: '#f87171',
          stack: 'total',
        },
      ],
    };

    const lineData = {
      labels: byDay.map((_, i) => String(i + 1).padStart(2, '0')),
      datasets: [
        {
          label: 'Receita',
          data: byDay.map((d) => d.receita),
          borderColor: '#4ade80',
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Despesa',
          data: byDay.map((d) => d.despesa),
          borderColor: '#f87171',
          tension: 0.4,
          fill: false,
        },
      ],
    };

    return { pieData, barData, lineData };
  }, [month]);
}
