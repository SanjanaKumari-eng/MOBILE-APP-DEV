import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
