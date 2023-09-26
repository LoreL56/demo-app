import "./ExpenseForm.css";
import React, { useState } from "react";

//passare props
function ExpenseForm(props) {

  //si possono usare più states, uno per ogni proprietà
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  //oppure usare uno stato unico
  const [userInput, setUserInput] = useState({
    title: '',
    date: new Date(),
    amount: '',
  });

  function titleChangerHandler(event) {
    // setEnteredTitle(event.target.value);
    //si passa come funzione
    //per avere la garanzia che quando react si occupa degli
    //aggiornamenti degli stati prende la versione corretta dell'ultimo
    //stato disponibile
    setUserInput((previousState) => {
      return {...previousState, title: event.target.value};
    });
  }

  function amountChangerHandler(event) {
    setUserInput((previousState) => {
      return {...previousState,amount: event.target.value}
    });
  }

  function dateChangerHandler(event) {
    setUserInput((previousState) => {
      //console.log(event.target.value);
      return {...previousState,date: event.target.value}
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onSaveExpenseData(userInput);

    setUserInput((previousState) => {
      return {
        date: new Date(),
        amount: '',
        title: ''
      }
    });
  }

  function closeFormHandler(event)
  {
    props.onCloseForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangerHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangerHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.date} onChange={dateChangerHandler}></input>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Element</button>
        <button type="button" onClick={closeFormHandler}>Close</button>
      </div>
    </form>
  );
  
}

export default ExpenseForm;
