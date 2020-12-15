import React, { useState } from 'react'

export const AddTransaction = () => {

    const [text, settext] = useState('')
    const [amount, setamount] = useState(0)
    

    const Addition = (event) =>{
        event.preventDefault();

    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <label htmlFor="description">Text</label>
                <input type="text" id="description" placeholder="Enter description..." value={text} onChange={(e)=>{settext(e.target.value)}}></input>
                
                <label htmlFor="amount">Amount <br/>
                (negative - expense, positive - income)</label>
                <input type="number" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e)=>{setamount(e.target.value)}}></input>
                <button className="btn" onClick={Addition}>Add Transaction</button>
            </form>
        </div>
    )
}
