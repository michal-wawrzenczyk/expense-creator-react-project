// import React from 'react'; // default import
import React from 'react'; // named import

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import './ExpenseItem.css';
// import css file for this component

// a Component in React is just a JavaScript function
// props (properties) is an object which holds key-value pairs of attributes defined in ExpenseItem component (App.js).
function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 3,26);
    // Date - built-in constructor
    // const expenseTitle = 'Birthday';
    // const expenseAmount = 2000;

    // const [title, setTitle] = useState(props.title);
    // useState is so-called React Hook.
    // Hooks must be called inside a component function and should not be called in nested functions.
    // useState gives access to this special variable.
    // useState also returns a function which we can then call to assign new value to that variable.
    // we will be assigning new values by calling a function - this is the way how State variable works.
    // our useState returns an array: first element is a variable itself, and second element is the updating function.
    // we can use array destructuring feature to store both elements as separate variables or constants.
    // first element (title) is a pointer at that managed value ( initially props.title ).
    // second element is a function which we can later call to set a new title (setTitle updates the value).
    // useState Hook always returns an array with exactly two elements (initial value and function for updating it).

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     // when we call this State updating function, this special variable receives a new value.
    //     // In addition, the component function will be executed again.
    //     console.log(title);
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
    // <button onClick={clickHandler}>Change Title</button>
    // button just for demo purposes
}

// we cannot use our custom components (like Card) as wrappers for the content.
// we have to build reusable wrapper component.
// document.getElementById(‘root’).addEventListener(); - imperative way of adding an Event listener

export default ExpenseItem;
// now we can import this function in another file (App.js)