// Actions
const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

// Reducer
const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
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
