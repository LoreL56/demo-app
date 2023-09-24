import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import React, { useState } from 'react';


//passare props
//si possono passare anche con object desctructuring
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);
  const [counter, setCounter] = useState(0);

  function changeTitleHandler()
  {
    counter > 0 ? setTitle(title.substring(0,title.length-(counter-1).toString().length) + counter) : setTitle(title + counter);
    setCounter(counter => counter + 1);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expense.date} />
      <div className='expense-item__description'>
        <h2> {title} </h2>
        <div className='expense-item__price'> ${props.expense.amount}  </div>
      </div>
      <button onClick={changeTitleHandler}>Cambia Titolo</button>
    </Card>
  );
}

export default ExpenseItem;
