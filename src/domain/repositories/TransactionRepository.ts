import { Transaction } from '../entities/Transaction';

export interface TransactionRepository {
  getAll(): Transaction[];
  getByMonth(year: number, month: number): Transaction[];
}

