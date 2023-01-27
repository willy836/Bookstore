/* eslint-disable */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleStatusClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <button type="button" onClick={handleStatusClick}>
        CHECK STATUS
      </button>
      <h3>{status}</h3>
    </div>
  );
};

export default Categories;
