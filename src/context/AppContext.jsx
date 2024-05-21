
import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
	switch (action.type) {
	  case "ADD_EXPENSE":
		 const newExpenses = [...state.expenses, action.payload];
		 localStorage.setItem("expenses", JSON.stringify(newExpenses));
		 return {
			...state,
			expenses: newExpenses,
		 };
 
	  case "DELETE_EXPENSE":
		 const updatedExpenses = state.expenses.filter(
			(expense) => expense.id !== action.payload
		 );
		 localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
		 return {
			...state,
			expenses: updatedExpenses,
		 };
 
	  case "SET_BUDGET":
		 localStorage.setItem("budget", action.payload);
		 return {
			...state,
			budget: action.payload,
		 };
 
	  default:
		 return state;
	}
 };
 

const initialState = {
	budget: JSON.parse(localStorage.getItem("budget")) || 0,
	expenses: JSON.parse(localStorage.getItem("expenses")) || [],
	
}

export const AppContext = createContext();
export const AppProvider = (props) =>{
	const [state, dispatch] = useReducer(AppReducer, initialState)
console.log(state);
	return (
		<AppContext.Provider value={{
			budget: state.budget,
			expenses: state.expenses,
			dispatch,
		}}>
			{props.children}
		</AppContext.Provider>
	)
}