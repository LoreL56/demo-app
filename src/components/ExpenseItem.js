import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Tavolo';
  const expenseAmount = 12.4;

  return (
    <div className='expense-item'>
      <div> {expenseDate.toISOString()} </div>
      <div className='expense-item__description'>
        <h2> {expenseTitle} </h2>
        <div className='expense-item__price'> ${expenseAmount.toString()} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
