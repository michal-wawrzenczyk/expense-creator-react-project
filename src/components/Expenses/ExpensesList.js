import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    // let expensesContent = <p>No expenses found.</p>
    // Yes, we can store JSX content in a variable

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
        // ExpensesList will render this if there are no expenses in chosen year
    }

    // filteredExpenses does not exist here anymore
    // if (props.items.length > 0) {
    //     expensesContent =
    // }

    return (
        <ul className="expenses-list">
        {props.items.map((expense) =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )}
    </ul>);
};

export default ExpensesList;