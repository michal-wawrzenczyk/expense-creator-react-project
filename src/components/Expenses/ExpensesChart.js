import React from "react";
import Chart from "../Chart/Chart";

// props will be the filtered expenses for chosen year
const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    // go through all expenses to sum up all the expenses for the different months and assign the values to them
    // (NOT for "in" !) - > for "of" loop, since props.expenses is an array, not an object
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        // date is a date object
        // getMonth - built-in object.
        // we will get month starting at 0 -> January = 0 and ends in 11
        chartDataPoints[expenseMonth].value += expense.amount;
        // expenseMonth as an index
        // update the value of selected dataPoint by adding something to it (+=)
        // we want to increase the value of a given month by expense.amount
        // the value will not be 0 anymore but instead the summed up value for the given month expenses.
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;