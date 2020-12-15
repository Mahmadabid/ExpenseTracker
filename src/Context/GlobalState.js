import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, description: "Income 1", Amount: -1000},
        {id: 2, description: "Expense 1", Amount: 100},
        {id: 3, description: "Income 2", Amount: -10},
        {id: 4, description: "Expense 2", Amount: 500}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}