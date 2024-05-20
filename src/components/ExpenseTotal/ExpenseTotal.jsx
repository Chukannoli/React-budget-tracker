import React from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import styles from "./ExpenseTotal.module.css";

export const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total += item.cost);
  }, 0);
  return (
    <div className={styles.totalSpentContainer}>
      <h3>Total spent</h3>
      <h2>{totalExpenses} ,-</h2>
    </div>
  );
};
