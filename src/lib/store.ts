import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ExpenseStore, Transaction, Category } from '../types';

const defaultCategories: Category[] = [
  { id: '1', name: 'Food', color: '#0EA5E9', budget: 500 },
  { id: '2', name: 'Transport', color: '#38BDF8', budget: 200 },
  { id: '3', name: 'Entertainment', color: '#F472B6', budget: 300 },
  { id: '4', name: 'Shopping', color: '#0284C7', budget: 400 },
  { id: '5', name: 'Bills', color: '#075985', budget: 1000 },
];

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      transactions: [],
      categories: defaultCategories,
    }),
    {
      name: 'expense-store',
    }
  )
);

export const addTransaction = (transaction: Transaction) => {
  useExpenseStore.setState((state) => ({
    transactions: [transaction, ...state.transactions],
  }));
};

export const deleteTransaction = (id: string) => {
  useExpenseStore.setState((state) => ({
    transactions: state.transactions.filter((t) => t.id !== id),
  }));
};