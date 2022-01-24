import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import AddNewExpense from "./components/NewExpense/AddNewExpense";

const dummy_expenses = [
    {
        id: 'e1',
        title: 'Water',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(dummy_expenses);

    const addExpenseHandler = expense => {
        // setExpenses([expense, ...expenses]);
        setExpenses(previousExpenses => {
            return [expense, ...previousExpenses]
        })
        // console.log('In App.js');
        // console.log(expense);
        // we have not yet learned how to add lists of data dynamically
        // expense is an item, expenses - existing items (expenses)
        // setExpenses - State updating function
    }

    return (
        <div>
            <AddNewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>
    );
    // App renders those two components
}

// function named as App

export default App;
// it is imported in index.js file

// creating paragraph in Vanilla JS (imperative approach - clear step-by-step instructions):

// const paragraph = document.createElement('p');
// paragraph.textContent = 'This is also visible!';
// document.getElementById('root').appendChild(paragraph);