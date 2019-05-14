import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/posts';

import { 
  VOTE,
  COMMENT
} from '../utils/constants';
  
const initialState = {
  posts: [],
  post: {}
};
  
export default function postsReducer(state = initialState, action) {

  switch (action.type) {
    case GET_POSTS:
      return {
        orderBy: action.orderBy,
        posts: action.posts.sort((p1, p2) => {
          switch (action.orderBy) {
            case VOTE:
              return p2.voteScore - p1.voteScore;
            case COMMENT:
              return p2.commentCount - p1.commentCount;
            default:
              return p2.timestamp - p1.timestamp;
          }
        })
      }
    case ADD_POST:
      return {
        post: action.post
      };
    case GET_POST:
      return {
        post: action.post
      };
    case VOTE_POST:
      if (state.posts)
        return {
          posts: state.posts.map(post => {
            return post.id === action.post.id ? action.post : post;
          })
        };
      return {
        post: Object.assign({}, action.post)
      }
    case EDIT_POST:
      return {
        post: action.post
      };
    case DELETE_POST:
      return {
        post: action.post
      };
    default:
      return state;
  }
}