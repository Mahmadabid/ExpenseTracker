import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total =()=>  {
    let balance= 0;
    for (var i=0;i<transactions.length;i++) {
      balance += transactions[i].amount
    }
    return balance.toFixed(2);
   }


  return (
    <div>
      <h4>Your Balance</h4>
    <h1 className={`${total()>0?'plus':''} ${total()<0?'minus':''}`}>${total()}</h1>
    </div>
  )
}