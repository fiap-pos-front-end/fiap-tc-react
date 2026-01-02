export class Transaction {
  constructor(
    public readonly id: number,
    public readonly amount: string,
    public readonly type: 'Receita' | 'Despesa',
    public readonly date: Date,
    public readonly categoryId: number,
    public readonly categoryName?: string
  ) {}

  isReceita(): boolean {
    return this.type === 'Receita';
  }

  isDespesa(): boolean {
    return this.type === 'Despesa';
  }

  isInMonth(year: number, month: number): boolean {
    return this.date.getFullYear() === year && this.date.getMonth() + 1 === month;
  }
}
