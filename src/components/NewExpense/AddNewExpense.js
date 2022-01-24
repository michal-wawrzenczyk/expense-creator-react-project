import React, { useState } from 'react';
import './AddNewExpense.css';
import ExpenseForm from "./ExpenseForm";

const AddNewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // pull out all the key-value pairs from object generated in the submitHandler
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
        // console.log('"Add Expense" button was clicked!');
        // when "Add Expense" button is pressed, the form disappear
    }

    const startEditingHandler = () => {
        setIsEditing(true);
        // console.log('"Add New Expense" button  was clicked!');
    }
    // this function should execute, when the button Add New Expense is clicked

    const stopEditingHandler = () => {
        setIsEditing(false);
        console.log('"Cancel" button was clicked!');
    }

    // return a form in the end for our inputs
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />}
        </div>
    );
}
// AddNewExpense component will be rendered in App.js

export default AddNewExpense;