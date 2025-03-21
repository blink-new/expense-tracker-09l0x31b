import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { ExpenseChart } from './components/ExpenseChart';
import { BudgetProgress } from './components/BudgetProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Add New Transaction</h2>
              <AddTransaction />
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Transactions</h2>
              <TransactionList />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Expense Distribution</h2>
              <ExpenseChart />
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Budget Progress</h2>
              <BudgetProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}