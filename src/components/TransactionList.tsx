import { useExpenseStore, deleteTransaction } from '../lib/store';
import { formatCurrency } from '../lib/utils';

export const TransactionList = () => {
  const transactions = useExpenseStore((state) => state.transactions);
  const categories = useExpenseStore((state) => state.categories);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
      
      <div className="space-y-2">
        {transactions.map((transaction) => {
          const category = categories.find((c) => c.id === transaction.category);
          
          return (
            <div
              key={transaction.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
              style={{ borderLeft: `4px solid ${category?.color}` }}
            >
              <div>
                <p className="font-medium text-gray-800">{transaction.description || category?.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">
                  {formatCurrency(transaction.amount)}
                </span>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        
        {transactions.length === 0 && (
          <p className="text-center text-gray-500 py-8">No transactions yet</p>
        )}
      </div>
    </div>
  );
};