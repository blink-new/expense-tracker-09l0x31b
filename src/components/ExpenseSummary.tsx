import { useExpenseStore } from '../lib/store';
import { formatCurrency } from '../lib/utils';

export const ExpenseSummary = () => {
  const transactions = useExpenseStore((state) => state.transactions);
  const categories = useExpenseStore((state) => state.categories);

  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);

  const categoryExpenses = categories.map(category => {
    const spent = transactions
      .filter(t => t.category === category.id)
      .reduce((sum, t) => sum + t.amount, 0);
    
    return {
      ...category,
      spent,
      percentage: category.budget > 0 ? (spent / category.budget) * 100 : 0
    };
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Expenses</h2>
        <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalExpenses)}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget Progress</h2>
        <div className="space-y-4">
          {categoryExpenses.map(category => (
            <div key={category.id} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">{category.name}</span>
                <span className="text-gray-600">
                  {formatCurrency(category.spent)} / {formatCurrency(category.budget)}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${Math.min(category.percentage, 100)}%`,
                    backgroundColor: category.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};