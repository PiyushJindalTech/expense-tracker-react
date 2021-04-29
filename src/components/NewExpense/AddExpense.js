import React from 'react'
import ExpenseForm from './ExpenseForm';
import './AddExpense.css'

function AddExpense(props) {

    const saveExpenseHandler = enteredExpenseData => {
        const newExpenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }

        props.onAddExpense(newExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default AddExpense
