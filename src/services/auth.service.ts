import axios from "axios";
import consts from "../utils/consts";

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(consts.API_URL + "sign-in", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string) {
        return axios.post(consts.API_URL + "sign-up", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const localUserInfo = localStorage.getItem("user");
        if (localUserInfo) {
            return JSON.parse(localUserInfo);
        }

        return null;
    }
}

export default new AuthService();