import React, { useState, useContext } from 'react'
import { GlobalContext, IncExp } from '../Context/GlobalState';

export const AddTransaction = () => {
  
    const [Incexp, setIncExp] = useContext(IncExp);
    const { addtransactions } = useContext(GlobalContext);
    const [text, settext] = useState('')
    const [amount, setamount] = useState('')
    
    const newTransaction={
        id:Math.floor(Math.random() * 100000000),
        text,
        amount : Incexp==='income'?+amount:-amount
    }
    
      function Addition (event) {
        event.preventDefault();
          addtransactions(newTransaction);
          settext('');
          setamount('');
          
    }
    
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={Addition}>
                <label htmlFor="description">Text</label>
                <input type="text" id="description" placeholder="Enter description..." required value={text} onChange={(e)=>{settext(e.target.value)}} />
                
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e)=>{setamount(e.target.value)}} required/>
                <div className="Inc-Exp">
                  <div>
                    <input type="radio" id="income" name="balance" onClick={()=>{setIncExp('income')}} defaultChecked required/>
                    <label htmlFor="income" className="inc-col">Income</label>
                  </div>
                  <div>
                    <input type="radio" id="expense" name="balance" onClick={()=>{setIncExp('expense')}} required/>
                    <label htmlFor="expense" className="exp-col">Expense</label>
                  </div>
                </div>
                <input className="btn" type="submit" value="Addtransaction"/>
            </form>
        </div>
    )
    }
    