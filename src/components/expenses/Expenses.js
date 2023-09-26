import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../ui/Card";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

 
  const filteredExpenses = props.expenses.filter(function (element) {
    return element.date.getFullYear().toString() === selectedYear.toString();
  });

  function changeSelectionHandler(year) {
    setSelectedYear(year);
    //console.log(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onFilterChanged={changeSelectionHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
