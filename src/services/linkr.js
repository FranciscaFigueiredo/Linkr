import axios from "axios";
import { api } from "./apiUrl";

function postSignUp(body) {
    const promise = axios.post(`${api}/users`, body);
    return promise;
}

export {
    postSignUp,
};
