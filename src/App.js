import { useState } from "react";
import Header  from "./Components/Header";
import './App.css';
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";

import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider, Globalbtn } from "./Context/GlobalState";

function App() {

  let islit=useState(true);

  return (
    <GlobalProvider>
      <Globalbtn.Provider value={islit}>
      <div className={`${islit[0]?'lit':'dark'} body-width`}>
            <Header />
      
        <div className="container">
          <Balance /> 
          <IncomeExpenses />
          <TransactionHistory />
          <AddTransaction />
        </div> 
        </div>
        </Globalbtn.Provider> 
    </GlobalProvider>
  );
}

export default App;
