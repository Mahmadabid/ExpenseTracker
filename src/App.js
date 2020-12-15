import { useState } from "react";
import { Header } from "./Components/Header";
import './App.css';
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import Bulb from "./Components/Bulb.png";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  let [islit,setlit]=useState(true);

  return (
    <GlobalProvider>
      <div className={`${islit?'':'dark'} body-width`}>
        <div className="head">
          <div className="header">
            <Header />
            <button className={`${islit?'lit':'dark'} btn-size`} onClick={()=>{setlit(!islit)}}><img className="size-img" src={Bulb} alt="Dark and Light Theme"/></button>
          </div>
        </div>
        <div className="container">
          <Balance /> 
          <IncomeExpenses />
          <TransactionHistory />
          <AddTransaction />
        </div> 
      </div>
    </GlobalProvider>
  );
}

export default App;
