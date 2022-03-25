import axios from 'axios';
import { api } from './apiUrl';

function postSignUp(body) {
  const promise = axios.post(`${api}/users`, body);
  return promise;
}

function getPosts() {
  return axios.get(`${api}/posts`);
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
  getLikes,
  getHashtag,
  likeThePost,
  dislikeThePost,
};
