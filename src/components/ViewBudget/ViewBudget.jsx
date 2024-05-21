import React from 'react'
import styles from './ViewBudget.module.css'

export const ViewBudget = (props) => {
  return (
	<>
	<h3>Current balance 	<button type='button' onClick={props.handleEditClick}>
	<i class="fa-solid fa-pen-to-square"></i>
	</button> </h3>
	<h1>{props.budget} ,-</h1>
</>
  )
}
