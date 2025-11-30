import { EVENTS, onEvent, Transaction as SharedTransaction } from '@fiap-pos-front-end/fiap-tc-shared';
import { Transaction } from '../../domain/entities/Transaction';
import { TransactionRepository } from '../../domain/repositories/TransactionRepository';

/**
 * Infrastructure layer: Implements repository using the event system
 * This is where the framework/library coupling happens
 */
export class EventBasedTransactionRepository implements TransactionRepository {
  private transactions: Transaction[] = [];

  constructor() {
    // Listen to shared event system
    onEvent(EVENTS.TRANSACTIONS_UPDATED, (sharedTxs: SharedTransaction[]) => {
      this.transactions = sharedTxs.map(this.toDomain);
    });
  }

  /**
   * Maps from shared Transaction interface to domain Transaction entity
   */
  private toDomain(shared: SharedTransaction): Transaction {
    return new Transaction(
      shared.id,
      shared.amount,
      shared.type,
      new Date(shared.date),
      shared.categoryId,
      shared.category?.name,
    );
  }

  getAll(): Transaction[] {
    return this.transactions;
  }

  getByMonth(year: number, month: number): Transaction[] {
    return this.transactions.filter((tx) => tx.isInMonth(year, month));
  }
}

