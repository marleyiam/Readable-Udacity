import {
  getCommentsByPostId,
  saveComment,
  voteComment,
  updateComment,
  removeComment,
} from '../utils/API';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function vote(comment, voteRating) {
  return {
    type: VOTE_COMMENT,
    voteRating,
    comment
  };
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  };
}

export function handleGetComments(id) {
  return (dispatch) => {
    getCommentsByPostId(id).then(comments => {
      dispatch(getComments(comments));
    });
  };
}

export function deleteComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  };
}

export function handleAddComment(comment) {
  return (dispatch) => {
    saveComment(comment).then(comment => {
      dispatch(addComment(comment));
    });
  };
}

export function handleVoteComment(comment, voteRating) {
  return (dispatch) => {
    voteComment(comment, voteRating).then(comment => {
      dispatch(vote(comment, voteRating));
    });
  };
}

export function handleEditComment(comment) {
  return (dispatch) => {
    updateComment(comment).then(comment => {
      dispatch(editComment(comment));
    });
  };
}

export function handleRemoveComment(comment) {
  return (dispatch) => {
    removeComment(comment).then(comment => {
      dispatch(deleteComment(comment));
    });
  };
}