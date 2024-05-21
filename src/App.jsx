import "./App.css";
import { AddExpenseForm } from "./components/AddExpenseForm/AddExpenseForm";
import { Budget } from "./components/Budget/Budget";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { ExpenseTotal } from "./components/ExpenseTotal/ExpenseTotal";
import { Remaining } from "./components/Remaining/Remaining";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <div className="main-container">
          <p>Budget App</p>
          <div className="budget-container">
            <Budget />
          </div>

          <div className="budget-stats">
            <div className="remaining-container">
              <Remaining />
            </div>
            <div className="expense-total">
              <ExpenseTotal />
            </div>
          </div>
          <div className="formList">
            <div className="expense-form">
              <h3>Add Expense</h3>
              <AddExpenseForm />
            </div>

            <div className="expense-list-container">
              <h3>Expenses</h3>
              <ExpenseList/>
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
