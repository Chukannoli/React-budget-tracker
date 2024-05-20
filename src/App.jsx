import "./App.css";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
    <AppProvider>
    <div className="main-container">
        <h1>Budget App</h1>
        <div className="budget-info">
          <div className="budget-container">
            
          </div>
          <div className="remaining-container">
            
          </div>
          <div className="expense-total">
            
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
