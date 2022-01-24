import React, {useState} from 'react';

// import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// const Expenses = (props) => {...} --- arrow function

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    // setFilteredYear is a function

    const filterChangeHandler = (selectedYear) => {
        // console.log('Expenses.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;

// thanks to the dynamic expression: {props.items.map ...} we can change the array of and such change will be reflected.