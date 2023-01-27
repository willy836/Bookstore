/* eslint-disable */
// Actions
const CHECKSTATUS = "bookstore/categories/CHECKSTATUS";

// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return "Under construction";
    default:
      return state;
  }
};

// Action creators
export const checkStatus = (payload) => ({
  type: CHECKSTATUS,
  payload,
});

export default categoriesReducer;
