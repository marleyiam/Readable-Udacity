import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import postsReducer from './posts';
import categoriesReducer from './categories';
import commentsReducer from './comments';

export default combineReducers({
    postsReducer,
    categoriesReducer,
    commentsReducer,
    loadingBar: loadingBarReducer
});