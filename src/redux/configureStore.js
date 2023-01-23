import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const configureStore = () => {
  const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  });
  return rootReducer;
};

export default configureStore;
