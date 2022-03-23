import axios from "axios";
import { api } from "./apiUrl";

function postSignUp(body) {
    const promise = axios.post(`${api}/users`, body);
    return promise;
}

function postPublish(body, token) {
    const promise = axios.post(`${api}/posts`, body,
    { headers: { Authorization: `Bearer ${token}` } })
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${api}/users/login`, body);
    return promise;
}

export {
    postSignUp,
    postPublish,
    postLogin,
};
