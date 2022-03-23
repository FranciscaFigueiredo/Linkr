import axios from "axios";
import { api } from "./apiUrl";

function postSignUp(body) {
    const promise = axios.post(`${api}/users`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${api}/users/login`, body);
    return promise;
}

function logout({ token }) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.delete(`${api}/users/logout`, config);
    return promise;
}

export {
    postSignUp,
    postLogin,
    logout,
};
