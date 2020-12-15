import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState';

import { Transaction } from './Transaction'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map((transaction, ind) => (
                    <Transaction key={ind} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}