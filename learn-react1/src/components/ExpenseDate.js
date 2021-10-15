import './ExpenseDate.css';

function ExpenseDate (props) {

    return (
        <div className="expense-date">
           <div className="expense-date__month">{props.expdate.toLocaleString('en-US',{month:'long'})}</div>
            <div className="expense-date__day">{props.expdate.toLocaleString('en-US',{day:'2-digit'})}</div>
            <div className="expense-date__year">{props.expdate.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate;