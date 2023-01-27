import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const GETBOOK = 'bookstore/books/GETBOOK';

const apikey = '3NIoYi0HmR3w0D7JOHlP';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apikey}/books`;

export const getBooks = createAsyncThunk(GETBOOK, async () => {
  const response = await axios.get(URL);
  if (response.data) {
    return response.data;
  }
  return [];
});

export const addBook = createAsyncThunk(ADDBOOK, async (data) => {
  await axios.post(URL, data);
  return data;
});

export const removeBook = createAsyncThunk(REMOVEBOOK, async (id) => {
  await axios.delete(`${URL}/${id}`);
  return id;
});

const booksArr = [];

const bookSlice = createSlice({
  name: 'books',
  initialState: booksArr,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const newBooks = state;
      Object.entries(action.payload).forEach((book) => {
        newBooks.push({
          id: book[0],
          title: book[1][0].title,
          author: book[1][0].author,
          category: book[1][0].category,
        });
      });
      return newBooks;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.title,
        category: action.payload.category,
      });
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const newBooks = state.filter((book) => book.id !== action.payload);
      return newBooks;
    });
  },
});

export default bookSlice.reducer;
