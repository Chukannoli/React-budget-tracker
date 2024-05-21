import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from './ExpenseItem.module.css'

export const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const deleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li id={props.id} className={styles.expenseListRow}>
      <span>{props.name}</span> <span>{props.cost} ,-</span>
      <span>{props.date}</span> <span>{props.category}</span>
      <span>
        <button onClick={deleteExpense}>x</button>
      </span>
    </li>
  );
};
