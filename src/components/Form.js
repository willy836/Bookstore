import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleAddbook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <form>
        <h3>ADD NEW BOOK</h3>
        <div className="books">
          <div className="label-div">
            <input
              type="text"
              placeholder="Book title"
              id="title"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="label-div">
            <input
              type="text"
              placeholder="Book author"
              id="author"
              value={author}
              onChange={handleAuthor}
            />
          </div>
          <div>
            <button type="submit" onClick={handleAddbook}>
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
