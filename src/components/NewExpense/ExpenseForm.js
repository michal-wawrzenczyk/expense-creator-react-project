import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // useState('');
    // it will store the entered values in each input.

    // with array destructuring:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // these pieces of State belong to this one component: we can update and read them individually.
    // value of an input element will always be a string.
    // even if a number was entered, it stores a number as a string.

    // one State instead of 3:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    // the difference is, that whenever we update this, we need to update all three properties, not just one.
    // userInput is an object with key-value pairs. setUserInput is a State updating function.

    // this function should execute whenever the Title changes
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // better update the State in that way:
        // setUserInput((prevState) => {
        //     // return the new state
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        //     // this is the safer way to ensure that we always operate on the latest State snapshot.
        // });
    }
    // event - to get that default event object automatically
    // event.target.value = currently entered value
    // ...userInput to ensure that the other values are not lost, but are also part of the new state.

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // we tell browser: do not send a http request as it is as default.
        // the page will not reload automatically after button was clicked.
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // Date - built-in date constructor
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData); // we can execute it, because the value of onSaveExpenseData is a function
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // reset the inputs when form was submitted.
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        // now this is two-way binding: we don't just listen to changes in the input to update State.
                        // we also feed the State back into the input, so when we change State, we also change input.
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
    // type="button" - so that this button does not submit the form, it only cancels the form
}
export default ExpenseForm;