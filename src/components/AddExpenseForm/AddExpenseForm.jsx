import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from './AddExpenseForm.module.css'

export const AddExpenseForm = () => {
	const {dispatch} = useContext(AppContext)
	console.log(useContext(AppContext));
	const [name, setName] = useState("")
	const [cost, setCost] = useState("")
	const [date, setDate] = useState("")
	const [category, setCategory] = useState("-")

	const onSubmit = (e) =>{
		e.preventDefault()
		const expense = {
			id: Date.now(),
			name: name,
			cost: parseInt(cost),
			date: date,
			category: category 
		};
		console.log(expense);
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense
		})
		console.log(expense);
		
	};
	
  return (
	 <form className={styles.appForm} onSubmit={onSubmit}>
		<div className='formNameInput'>
			<label htmlFor="name">Name</label>
			<input type="text" name='name' className='nameInput' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
		</div>
		<div className='formCostInput'>
			<label htmlFor="name">Cost</label>
			<input type="text" name='cost' className='costInput' id='cost' value={cost} onChange={(e)=>setCost(e.target.value)}/>
		</div>
		<div className='formDateInput'>
			<label htmlFor="name">Date</label>
			<input type="date" name='date' className='dateInput' id='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
		</div>
		<div className='formCategoryInput'>
			<label htmlFor="name">Category</label>
			
			<select name="category" className='categoryInput' id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
				<option value="-">-</option>
				<option value="housing">Housing</option>
				<option value="transportation">Transportation</option>
				<option value="clothes">Clothes</option>
				<option value="other">Other</option>
			</select>
		</div>
		<div className='formButtonContainer'>
			<button type='submit' className='formButton'>Add expense +</button>
		</div>
	 </form>
  )
}
