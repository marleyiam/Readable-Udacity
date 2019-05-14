import { getAllCategories } from '../utils/API';
import { HOME } from '../utils/constants';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCaterories(categories) {
  return {
    type: GET_CATEGORIES,
    categories: [{name:HOME}].concat(categories)
  };
}

export function handleGetCategories() {
  return dispatch => {
    getAllCategories().then(categories => {
      dispatch(getCaterories(categories));
    });
  };
}