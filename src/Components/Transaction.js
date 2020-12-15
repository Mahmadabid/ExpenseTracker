import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.Amount<0?'-':'+'
    return (
        <li className={` ${transaction.Amount<0 ?'minus':''} ${transaction.Amount>0 ?'plus':''}`}>
            {transaction.description}<span>{sign}${Math.abs(transaction.Amount)}</span>
            <button className="delete-btn">X</button>
        </li>
    )
}