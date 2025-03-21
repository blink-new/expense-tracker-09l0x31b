import { useState } from 'react';
import useExpenseStore from '../lib/store';
import { format } from 'date-fns';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export function TransactionList() {
  const { transactions, categories, deleteTransaction } = useExpenseStore();
  const [search, setSearch] = useState('');

  const filteredTransactions = transactions
    .filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getCategoryColor = (categoryName: string) => {
    return categories.find((c) => c.name === categoryName)?.color || '#000000';
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          className="pl-10"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div
                className="h-10 w-10 rounded-full"
                style={{ backgroundColor: getCategoryColor(transaction.category) }}
              />
              <div>
                <p className="font-medium">{transaction.description || transaction.category}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(transaction.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">
                ${transaction.amount.toFixed(2)}
              </span>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
}