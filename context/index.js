import { useState, useEffect, useReducer, createContext } from "react";
import user from "./reducers";


const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};
export const Context = createContext({});

 const Provider = ({children}) => {
  const [state, dispatch] = useReducer(user, INITIAL_STATE);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};


export default Provider;