import React ,{useState}from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css'




function  ExpenseItem(props) {

const [title,setTitle] = useState(props.title);
console.log("expenseitem evaluated by React")

const clickHandler=() =>{
    setTitle("updated!");
    console.log(title)
}

return (
        <Card className="expense-item">
            <ExpenseDate dates={props.date}/>
            <div className="expense-item__description">
            <h2>{props.title}
            </h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change title  </button>
        </Card>
    )
    
}

export default ExpenseItem;