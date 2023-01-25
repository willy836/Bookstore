import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <Booklist books={books} />

      <Form />
    </div>
  );
};

export default Books;
