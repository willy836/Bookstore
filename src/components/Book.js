import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const handleRemoveClick = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-block">
      <div className="book-container">
        <div className="book">
          <h4 className="bk-category">{category}</h4>
          <h2 className="bk-title">{title}</h2>
          <p className="bk-author">{author}</p>
          <div className="cre">
            <p className="comment">Comments</p>
            <button
              type="button"
              className="remove"
              onClick={() => handleRemoveClick(id)}
            >
              Remove
            </button>
            <p className="edit">Edit</p>
          </div>
        </div>
      </div>
      <div className="right-block">
        <div className="progress">
          <div className="circle-progress" />
          <div className="level">
            <h4 className="percentage">64%</h4>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="current-ch">CURRENT CHAPTER</p>
          <h6 className="ch">Chapter 17</h6>
          <button type="button" className="btn-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Book;
