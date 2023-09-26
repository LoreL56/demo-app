import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

//passare props
//si possono passare anche con object desctructuring
function NewExpense(props) {

  const [isInsert, setIsInsert] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {...enteredExpenseData,date: new Date(enteredExpenseData.date), id: Math.random().toString()};

    //chiamo l'handler del componente ancora più sopra
    props.onAddExpense(expenseData)
    setIsInsert(false);
    //console.log(expenseData);
  }

  function addNewExpenseClickHandler()
  {
    setIsInsert(true);
  }

  function closeFormHandler()
  {
    setIsInsert(false);
  }


  return (
      <div className="new-expense">
        {!isInsert  && <button onClick={addNewExpenseClickHandler}>Add New Expense</button>}
        {isInsert && <ExpenseForm onCloseForm={closeFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
      </div>
  );
}

export default NewExpense;
