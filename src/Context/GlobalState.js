import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const IncExp = createContext('income');

export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    function deleteTransactions(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }

    function addtransactions(newtransaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: newtransaction
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


export const Globalbtn = createContext(true);