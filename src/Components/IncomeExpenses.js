  
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(items => items > 0)
    .reduce((val, items) => (val += items), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(items => items < 0)
    .reduce((val, items) => (val += items), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="Inc-Exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${expense}</p>
        </div>
      </div>
  )
}
