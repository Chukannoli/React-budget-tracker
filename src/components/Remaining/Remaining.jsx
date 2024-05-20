import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from './Remaining.module.css'

export const Remaining = () => {
	const {expenses, budget} = useContext(AppContext)
	const totalExpenses = expenses.reduce((total, item)=>{
		return (total = total + item.cost)
	}, 0);
  return (
	 <div className={styles.remainingContainer}>
		<h3>Remaining</h3>
		<h2>{budget - totalExpenses} ,-</h2>
	 </div>
  )
}
