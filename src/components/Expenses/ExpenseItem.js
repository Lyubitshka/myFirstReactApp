import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 45.34;
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem EVALUATED by REACT!');

    const clickHandler = () => {
        setTitle('Updated');
        // title = 'Updated!';
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price"> ${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}
export default ExpenseItem;
