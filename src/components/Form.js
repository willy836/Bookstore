import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const categories = ['Science', 'Fiction', 'Philosophy', 'Sociology'];

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddbook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Science');
  };
  return (
    <div>
      <form>
        <hr />
        <h3 className="add-book">ADD NEW BOOK</h3>
        <div className="books">
          <div className="label-div">
            <input
              type="text"
              placeholder="Book title"
              id="title"
              required
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="label-div">
            <input
              type="text"
              placeholder="Book author"
              id="author"
              required
              value={author}
              onChange={handleAuthor}
            />
          </div>
          <div className="sel">
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleCategory}
            >
              {categories.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit" className="add-btn" onClick={handleAddbook}>
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
