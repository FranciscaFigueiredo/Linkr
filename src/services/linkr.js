import axios from 'axios';
import { api } from './apiUrl';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function postSignUp(body) {
  const promise = axios.post(`${api}/users`, body);
  return promise;
}

function getPosts(hashtag) {
  if (hashtag) {
    return axios.get(`${api}/hashtag/${hashtag}`);
  }
  return axios.get(`${api}/posts`);
}

function loadPosts({ postsLength, token }){
  const config = createConfig(token);
  
  const promise = axios.get(`${api}/posts?olderThan=${postsLength}`, config);
  return promise;
  }

function getLikes() {
  return axios.get(`${api}/likes`);
}

function postPublish(body, token) {
  const promise = axios.post(`${api}/posts`, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}
function postLogin(body) {
  const promise = axios.post(`${api}/users/login`, body);
  return promise;
}

function logout({ token }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.delete(`${api}/users/logout`, config);
  return promise;
}
function getHashtag() {
  const promise = axios.get(`${api}/hashtag`);
  return promise;
}
function getUserByText(text) {
  const promise = axios.get(`${api}/users?text=${text}`);
  return promise;
}

function deletePost(token, postId) {
  const config = createConfig(token);
  return axios.delete(`${api}/posts/${postId}`, config);
}

function getPostsById(id) {
  const promise = axios.get(`${api}/posts/${id}`);
  return promise;
}

function getUserById(id) {
  const promise = axios.get(`${api}/users/${id}`);
  return promise;
}
function updateComment(token, comment, id, setDisabled) {
  const config = createConfig(token);
  const promise = axios.put(
    `${api}/posts`,
    {
      comment,
      id,
    },
    config
  );
  setDisabled(true);

  return promise;
}

function likeThePost({ id, token }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(`${api}/posts/${id}/like`, {}, config);
  return promise;
}

function dislikeThePost({ id, token }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.delete(`${api}/posts/${id}/like`, config);
  return promise;
}

export {
  postSignUp,
  postPublish,
  postLogin,
  logout,
  getPosts,
  loadPosts,
  getLikes,
  getHashtag,
  likeThePost,
  dislikeThePost,
  deletePost,
  getUserByText,
  getPostsById,
  updateComment,
  getUserById,
};
