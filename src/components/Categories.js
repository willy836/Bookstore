import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
