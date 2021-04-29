import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const yearFilterHandeler = event =>{
        props.onExpenseFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter by Year</label>
            <select onChange={yearFilterHandeler} value={props.filteredYear}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
        </div>
        </div>
    )
}

export default ExpenseFilter
