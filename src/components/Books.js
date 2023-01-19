import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => (
  <div>
    <Book title="Book1 Title" author="Book author1" />
    <Book title="Book2 Title" author="Book author2" />
    <Book title="Book3 Title" author="Book author3" />
    <Book title="Book4 Title" author="Book author4" />
    <Form />
  </div>
);

export default Books;
