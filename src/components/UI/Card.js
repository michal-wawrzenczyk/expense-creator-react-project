import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    // everything we receive as a className from outside, is added to the string.
    // we can now dynamically point at the classes const ( className={classes} ).
    // so with that we are making sure, that any value set one the className prop is added to this LONG STRING of class names.
    // then all the classNames is set on this div.
    return (
        <div className={classes}>{props.children}</div>
    );
}
// card container component which will act as a shell around either ExpenseItem or Expenses.
// this Card component will not be configured by some attributes.
// Instead, in ExpenseItem we will replace the main <div> by the custom <Card /> component.
// Thanks to this we get this predefined style for the card (Card.css) automatically.
// We will use props, but we will not work with some attributes.
// We will use one special prop which is built into React (children).
// Children prop will always be the content between opening and closing tag of Card.

export default Card;