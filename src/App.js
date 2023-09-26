import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/inputForm/NewExpense";
import React, { useState } from "react";

const INIT_EXPENSES = [];

//#region inizializzazione array
for (let i = 0; i < 100; i++) {
  INIT_EXPENSES.push({
    id: i,
    title: generateRandomObjectString(),
    date: generateRandomDate(),
    amount: Math.random().toFixed(2),
  });
}

function generateRandomDate() {
  const from = new Date('2019-01.01');
  const to = new Date('2023-12-31');

  var timeDiff = to.getTime() - from.getTime();
  var randomTimeElapsed = Math.random() * timeDiff;
  return new Date(from.getTime() + randomTimeElapsed);
}

// function generateRandomString(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = " ";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }

function generateRandomObjectString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "Object - ";
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  result += Math.floor(Math.random() * 100) + 1;

  return result;
}

//#endregion

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  function addExpenseHandler(returnedExpenseData) {
    //console.log(returnedExpenseData);
    setExpenses((prevExpenses) => {
      return [returnedExpenseData, ...prevExpenses];
    });
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses
            expenses={expenses}
          />
        </div>
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
