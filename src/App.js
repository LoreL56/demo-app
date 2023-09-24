import logo from './logo.svg';
import './App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/inputForm/NewExpense';

function App() {

  const expenses = [];

  for(let i = 0; i < 6; i++)
  {
    expenses.push({id: 1, title: generateRandomString(8),date: generateRandomDate(), amount: Math.random()});
  }

  function generateRandomDate() {
    const from = new Date(1,1,2019);
    const to = new Date(31,12,2023);

    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }

  // program to generate random strings
  // declare all characters
  
  function generateRandomString(length) {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }

  
  function addExpenseHandler(returnedExpenseData) {
    console.log("App changed");
    console.log(returnedExpenseData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses expenses={expenses} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
