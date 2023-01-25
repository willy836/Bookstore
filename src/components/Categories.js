import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Header from './Header';

const Categories = () => {
  const dispatch = useDispatch();

  const handleStatusClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <Header />
      <button type="button" onClick={handleStatusClick}>
        CHECK STATUS
      </button>
    </div>
  );
};

export default Categories;
