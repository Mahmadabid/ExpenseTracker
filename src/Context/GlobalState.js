import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    function deleteTransactions(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }

    function addtransactions(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions, deleteTransactions, addtransactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}