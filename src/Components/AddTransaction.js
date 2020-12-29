import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {

    const { addtransactions } = useContext(GlobalContext);
    const [text, settext] = useState('')
    const [amount, setamount] = useState('')
    
    const newTransaction={
        id:Math.floor(Math.random() * 100000000),
        text,
        amount : +amount
    }
    
      const Addition = (event) =>{
        event.preventDefault();
        

        if (amount==='' || text==='' || amount==='0'){
          alert('Please add a non-zero value and a text');
          settext('');
          setamount('');
        }

        else {
          addtransactions(newTransaction);
          settext('');
          setamount('');
        }    
    }
    
    return (
        <div>
            <h3>Add Transaction</h3>
            <form action="">
           {/*<form> */} 
                <label htmlFor="description">Text</label>
                <input type="text" id="description" placeholder="Enter description..." value={text} onChange={(e)=>{settext(e.target.value)}} required/>
                
                <label htmlFor="amount">Amount <br/>
                (negative - expense, positive - income)</label>
                <input type="number" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e)=>{setamount(e.target.value)}} required/>
                <div className="Inc-Exp">
                  <div>
                    <input type="radio" value={amount} id="income" name="balance" onClick={(e)=>{setamount(e.target.value)}} required/>
                    <label htmlFor="income" className="inc-col">Income</label>
                  </div>
                  <div>
                    <input type="radio" value={-amount} id="expense" name="balance" onClick={(e)=>{setamount(e.target.value)}} required/>
                    <label htmlFor="expense" className="exp-col">Expense</label>
                  </div>
                </div>
                {/*<button className="btn" onClick={Addition}>Add Transaction</button>*/}
                <input className="btn" type="submit" value="Addtransaction" onClick={Addition}/>
            </form>
        </div>
    )
    }
    