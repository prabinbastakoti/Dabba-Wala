import { createContext, useEffect, useReducer, useState } from 'react';

const INITIAL_STATE = {
  user: JSON.parse(window.localStorage.getItem('USERDATA')),
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
      };
    case 'LOGOUT':
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
