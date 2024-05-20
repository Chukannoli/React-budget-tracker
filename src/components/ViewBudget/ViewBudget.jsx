import React from 'react'
import styles from './ViewBudget.module.css'

export const ViewBudget = (props) => {
  return (
	<>
	<h3>Current balance 	<button style={styles.button} type='button' onClick={props.handleEditClick}>
		Edit
	</button> </h3>
	<h1>{props.budget} ,-</h1>

</>
  )
}
