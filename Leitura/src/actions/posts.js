import { 
  getAllPosts,
  getPostById,
  savePost,
  votePost,
  updatePost,
  removePost
} from '../utils/API';

import { DATA } from '../utils/constants';

export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';

function getPost(post) {
  return {
    type: GET_POST,
    post
  };
}

export function getPosts(posts, orderBy) {
  return {
    type: GET_POSTS,
    posts,
    orderBy
  };
}

function vote(post) {
  return {
    type: VOTE_POST,
    post
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  };
}

export function handleGetPost(id) {
  return dispatch => {
    return getPostById(id).then(post => {
      dispatch(getPost(post));
    });
  };
}

export function handleGetPosts(orderBy = DATA) {
  return dispatch => {
      return getAllPosts().then(posts => {
        dispatch(getPosts(posts, orderBy));
      });
  };
}

export function handleAddPost(post) {
  return dispatch => {
    return savePost(post).then(post => {
      dispatch(addPost(post));
    });
  };
}

export function handleVote(post, voteRate) {
  return dispatch => {
    return votePost(post, voteRate).then(post => {
      dispatch(vote(post));
    });
  };
}

export function handleEditPost(post) {
  return dispatch => {
    return updatePost(post).then(post => {
      dispatch(editPost(post));
    });
  };
}

export function handleDeletePost(post) {
  return dispatch => {
    return removePost(post).then(post => {
      dispatch(deletePost(post));
    });
  };
}