import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GLobalProvider } from './Contexts/GlobalState';

function App() {
  return (
    <GLobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GLobalProvider>
  );
}

export default App;
