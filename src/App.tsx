import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { ExpenseSummary } from './components/ExpenseSummary';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracker</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TransactionForm />
            <TransactionList />
          </div>
          
          <div>
            <ExpenseSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;