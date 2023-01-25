import { v4 as uuidv4 } from 'uuid';

// Actions
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

// Initial state
const initialState = [
  {
    id: uuidv4(),
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
  },
  {
    id: uuidv4(),
    title: 'Gifted Hands',
    author: 'Ben Carson',
  },
  {
    id: uuidv4(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => ({
  type: ADDBOOK,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

export const removeBook = (book) => ({
  type: REMOVEBOOK,
  payload: {
    id: book.id,
  },
});

export default booksReducer;
