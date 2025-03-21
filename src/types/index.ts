export interface Transaction {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  budget: number;
}

export interface ExpenseStore {
  transactions: Transaction[];
  categories: Category[];
}