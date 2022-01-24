import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    // transform dataPoints from objects to numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // console.log(dataPointValues); // array of numbers

    // find the biggest value of all months
    const totalMaximum = Math.max(...dataPointValues);
    // Math.max wants an array of numbers, we have an array of objects
    // spread operator to pull out all the array elements and add them as standalone arguments

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}/>
            )}
        </div>
    )
}

export default Chart;