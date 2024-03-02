import React, { createContext, useContext, useReducer } from "react";

// Prepare a data layer
export const StateContext = createContext();

// Wrap the app and provider with data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
