import axios from 'axios';
import { api } from './apiUrl';

function postSignUp(body) {
  const promise = axios.post(`${api}/users`, body);
  return promise;
}

function getPosts() {
  return axios.get(`${api}/posts`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0ODE4MDA5NiwiZXhwIjoxNjQ4MzUyODk2fQ.BgtRqJyjN2069e4tCYcDg1BV9P2bOSWgpEyU4FZRrYc`,
    },
  });
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

export { postSignUp, postPublish, postLogin, logout, getPosts, likeThePost, dislikeThePost };
