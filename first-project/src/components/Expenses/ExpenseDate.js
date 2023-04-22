 
 import './ExpenseDate.css';
 
 
 function ExpenseDate(props){
    const month=props.dates.toLocaleString('en-US',{ month:'long'});
    const day=props.dates.toLocaleString('en-US',{ day:'2-digit'});
    const year=props.dates.getFullYear()

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day">{year}</div>
            </div>
    )
 }

 export default ExpenseDate;