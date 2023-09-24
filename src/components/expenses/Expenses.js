import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import React, {useState} from 'react';

//passare props
//si possono passare anche con object desctructuring
function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2021');

  function changeSelectionHandler(year) {
    setSelectedYear(year);
    console.log(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onFilterChanged={changeSelectionHandler} />
        <ExpenseItem expense={props.expenses[0]}/>
        <ExpenseItem expense={props.expenses[1]}/>
        <ExpenseItem expense={props.expenses[2]}/>
        <ExpenseItem expense={props.expenses[3]}/>
      </Card>
    </div>
  );
}

export default Expenses;
