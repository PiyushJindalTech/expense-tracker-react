import Expenses from './components/Expenses/Expenses'
import AddExpense from './components/NewExpense/AddExpense'
import './App.css';

function App() {
  const expenses = [{
    date: new Date(),
    amount: 150.23,
    title: 'Car Insurance'
  },
  {
    date: new Date(),
    amount: 500.69,
    title: 'Term Life'
  },
  {
    date: new Date(),
    amount: 160.13,
    title: 'Health'
  },
  {
    date: new Date(),
    amount: 160.13,
    title: 'LIC'
  }]

  const AddExpenseHandler = (expenseData) =>{
    console.log(expenseData)
  }
  return (
    <div>
      <AddExpense onAddExpense={AddExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
