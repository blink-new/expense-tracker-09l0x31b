import useExpenseStore from '../lib/store';
import { Progress } from './ui/progress';

export function BudgetProgress() {
  const { transactions, categories } = useExpenseStore();

  const categorySpending = transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    acc[category] = (acc[category] || 0) + transaction.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const spent = categorySpending[category.name] || 0;
        const percentage = (spent / category.budget) * 100;
        
        return (
          <div key={category.id} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{category.name}</span>
              <span className="text-sm text-gray-500">
                ${spent.toFixed(2)} / ${category.budget}
              </span>
            </div>
            <Progress
              value={percentage}
              className="h-2"
              indicatorClassName={percentage > 100 ? 'bg-red-500' : ''}
            />
          </div>
        );
      })}
    </div>
  );
}