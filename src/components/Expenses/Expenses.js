import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'
import './Expenses.css'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())


    const onChangeExpanseFilterHandler = (filteredYear) =>{
        setFilteredYear(filteredYear)
    } 


    return (
        <div>
            <Card className="expenses">
                <ExpenseChart expenses={props.expenses}/>
                <ExpenseFilter onExpenseFilter={onChangeExpanseFilterHandler} filteredYear={filteredYear}></ExpenseFilter>
                {props.expenses.map((expense) => {
                   return expense.date.getFullYear() === Number(filteredYear) ? 
                     (<ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                    ) :
                    ''
                })
                }
            </Card>
        </div>
    )
}

export default Expenses;
