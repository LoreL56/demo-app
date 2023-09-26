import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if(props.items.length === 0)
  {
    return (<h2 className='expenses-list__fallback'>No Expenses Found.</h2>);
  }
  else {
    return (
      <ul className="expenses-list">
          {props.items.map((x) => <ExpenseItem key={x.id} expense={x} />)}
      </ul>
    );
  }
 
}

export default ExpensesList;
