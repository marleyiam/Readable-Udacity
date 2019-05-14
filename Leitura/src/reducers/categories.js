import { GET_CATEGORIES } from '../actions/categories';

const initialState = {
  categories: []
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.categories
      };
    default:
      return state;
  }
}