const baseURL = 'http://localhost:3001';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${baseURL}/categories`, {
    headers
  }).then(res => res.json())
    .then(data => data.categories);

export const getPostById = (id) =>
  fetch(`${baseURL}/posts/${id}`, {
    headers
  }).then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getAllPosts = () =>
  fetch(`${baseURL}/posts`, {
    headers
  }).then(res => res.json());

export const getPostsByCategory = (id) =>
  fetch(`${baseURL}/${id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const savePost = (post) =>
  fetch(`${baseURL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const updatePost = (post) =>
  fetch(`${baseURL}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const removePost = (post) =>
  fetch(`${baseURL}/posts/${post.id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

export const votePost = (post, vote) =>
  fetch(`${baseURL}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option:vote})
  }).then(res => res.json())
  .catch(err => console.log('err', err));

export const getCommentsByPostId = (id) =>
  fetch(`${baseURL}/posts/${id}/comments`, {
    headers
  }).then(res => res.json());

export const saveComment = (comment) =>
  fetch(`${baseURL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const updateComment = (comment) =>
  fetch(`${baseURL}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const removeComment = (comment) =>
  fetch(`${baseURL}/comments/${comment.id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

export const voteComment = (comment, vote) =>
  fetch(`${baseURL}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option:vote})
  }).then(res => res.json());