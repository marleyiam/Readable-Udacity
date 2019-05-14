import {
  GET_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comments';

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        comments: action.comments.map(comment => {
          return {
            ...comment
          };
        })
      };
    case ADD_COMMENT:
      return {
        comments: [
          ...state.comments,
          {
            ...action.comment
          }
        ]
      };
    case VOTE_COMMENT:
      return {
        comments: state.comments.map(comment => {
          return comment.id === action.comment.id ? action.comment : comment;
        })
      };
    case EDIT_COMMENT:
      return {
        comments: state.comments.map(comment => {
          if (comment.id === action.comment.id) {
            return Object.assign({}, comment, action.comment);
          }
          return comment;
        })
      };
    case REMOVE_COMMENT:
      return {
        comments: state.comments.filter(
          comment => comment.id !== action.comment.id
        )
      };
    default:
      return state;
  }
}