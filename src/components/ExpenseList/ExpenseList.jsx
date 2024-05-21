import React from 'react'
import { useContext } from 'react'
import { ExpenseItem } from '../ExpenseItem/ExpenseItem'
import { AppContext } from '../../context/AppContext'

export const ExpenseList = () => {
	const {expenses} = useContext(AppContext)
	
  return (
	<ul>
		{expenses.map((expense)=>{
			return <ExpenseItem id = {expense.id} name = {expense.name} cost = {expense.cost} date = {expense.date} category = {expense.category} />
		})}
	</ul>
  )
}
