import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ExpenseStore, Transaction, Category } from '../types/expense';

const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      transactions: [],
      categories: [
        { id: '1', name: 'Food', color: '#0EA5E9', budget: 500 },
        { id: '2', name: 'Transport', color: '#38BDF8', budget: 300 },
        { id: '3', name: 'Entertainment', color: '#F472B6', budget: 200 },
        { id: '4', name: 'Shopping', color: '#0284C7', budget: 400 },
        { id: '5', name: 'Bills', color: '#7DD3FC', budget: 1000 },
      ],
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            ...state.transactions,
            { ...transaction, id: crypto.randomUUID() },
          ],
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      updateTransaction: (transaction) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === transaction.id ? transaction : t
          ),
        })),
      addCategory: (category) =>
        set((state) => ({
          categories: [
            ...state.categories,
            { ...category, id: crypto.randomUUID() },
          ],
        })),
      updateCategory: (category) =>
        set((state) => ({
          categories: state.categories.map((c) =>
            c.id === category.id ? category : c
          ),
        })),
    }),
    {
      name: 'expense-store',
    }
  )
);

export default useExpenseStore;