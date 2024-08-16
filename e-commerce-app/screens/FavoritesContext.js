import React, { createContext, useReducer } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.payload];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
