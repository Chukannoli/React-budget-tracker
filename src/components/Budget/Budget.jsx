import { useContext, useState } from 'react'
import React from 'react'
import { AppContext } from '../../context/AppContext'
import { EditBudget } from '../EditBudget/EditBudget'
import { ViewBudget } from '../ViewBudget/ViewBudget'
import styles from './Budget.module.css'

export const Budget = () => {
	const {budget, dispatch} = useContext(AppContext)
	const [isEditing, setIsEditing] = useState(false)

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};
  return (
	 <div>
					{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
	 </div>
  )
}
