import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';
import Form from './Form';
import Header from './Header';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <Header />
      <Booklist books={books} />

      <Form />
    </div>
  );
};

export default Books;
