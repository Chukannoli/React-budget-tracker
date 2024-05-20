import React, { useState } from 'react'

export const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget)
  return (
	<>
	<input
		required='required'
		type='number'
		id='name'
		value={value}
		onChange={(event) => setValue(event.target.value)}
	/>
	<button
		type='button'
		onClick={() => props.handleSaveClick(value)}
	>
		Save
	</button>
</>
  )
}
