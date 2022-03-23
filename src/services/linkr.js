import axios from 'axios';
import { api } from './apiUrl';

function postSignUp(body) {
  const promise = axios.post(`${api}/users`, body);
  return promise;
}

function getPosts() {
  return axios.get(`${api}/posts`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0Nzk3NzYwOSwiZXhwIjoxNjQ4MTUwNDA5fQ.300UH6vu-9BoFyGc3mFTH8YfeIevYNCa2mY213IxIcc`,
    },
  });
}

function postLogin(body) {
  const promise = axios.post(`${api}/users/login`, body);
  return promise;
}

export { postSignUp, getPosts, postLogin };
