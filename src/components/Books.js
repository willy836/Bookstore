import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Booklist from './Booklist';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books);
  return (
    <div className="bg-main">
      <div className="main">
        <Booklist books={books} />
        <Form />
      </div>
    </div>
  );
};

export default Books;
