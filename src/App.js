import { useState } from "react";
import Header  from "./Components/Header";
import './App.css';
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider, Globalbtn, IncExp } from "./Context/GlobalState";

function App() {

  const islit=useState(true);
  const incexp = useState('income');

  return (
    <GlobalProvider>
      <Globalbtn.Provider value={islit}>
        <IncExp.Provider value={incexp}>
          <div className={`${islit[0]?'lit':'dark-mode'} body-width`}>
              <Header />  
          <div className="container">
            <Balance /> 
            <IncomeExpenses />
            <TransactionHistory />
            <AddTransaction />
          </div> 
          </div>
        </IncExp.Provider>
      </Globalbtn.Provider> 
    </GlobalProvider>
  );
}

export default App;
