import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//passare props
//si possono passare anche con object desctructuring
function NewExpense(props) {

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};

    //chiamo l'handler del componente ancora più sopra
    props.onAddExpense(expenseData)
    
    //console.log(expenseData);
  }

  return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </div>
  );
}

export default NewExpense;
