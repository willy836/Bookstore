import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemoveClick = (id) => {
    dispatch(removeBook(id));
    console.log('remove btn clicked!', id);
  };
  return (
    <div className="book-container">
      <div className="book">
        <p className="bk">{title}</p>
        <p className="bk">{author}</p>
      </div>
      <button
        type="button"
        className="remove-btn"
        onClick={() => handleRemoveClick(id)}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Book;
