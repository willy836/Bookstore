// Actions
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

// Reducer
const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'ADDBOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case 'REMOVEBOOK':
      return state.books.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => ({
  type: ADDBOOK,
  payload: {
    id: book.id,
    title: book.title,
    author: book.author,
  },
});

export const removeBook = (bookId) => ({
  type: REMOVEBOOK,
  payload: {
    id: bookId,
  },
});

export default booksReducer;
