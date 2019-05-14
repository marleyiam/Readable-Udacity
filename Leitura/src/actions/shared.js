import { handleGetCategories } from '../actions/categories';
import { handleGetPosts } from '../actions/posts';

export function handleGetInitialData() {
  return (dispatch) => {
    dispatch(handleGetPosts());
    dispatch(handleGetCategories());
  }
}