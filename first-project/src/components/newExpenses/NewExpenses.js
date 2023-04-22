
import React from 'react'
import './newExpenses.css'
import ExpensesForm from './ExpensesForm'


const NewExpenses = (props) => {

     const saveExpenseDateHandler = (enteredExpenseData) => {
          const expenseData = {
               ...enteredExpenseData,
               id: Math.random().toString()
          };
          props.onAddExpense(expenseData)
          //console.log(expenseData)
     }
     return (
          <div className='new-expense'>
               <ExpensesForm onSaveExpenseData={saveExpenseDateHandler}></ExpensesForm>
          </div>
     )
}

export default NewExpenses;