import "./App.css";
import { Budget } from "./components/Budget/Budget";
import { ExpenseTotal } from "./components/ExpenseTotal/ExpenseTotal";
import { Remaining } from "./components/Remaining/Remaining";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <div className="main-container">
          <h1>Budget App</h1>
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

          <div className="expense-form">
            <h3>Add Expense</h3>
          </div>

          <div className="expense-list-container">
            <h3>Expenses</h3>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
