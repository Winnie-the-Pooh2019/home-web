import axios from "axios";
import authHeader from "./auth.header";
import consts from "../utils/consts";

class UserService {
    getPublicContent() {
        return axios.get(consts.API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(consts.API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(consts.API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(consts.API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();