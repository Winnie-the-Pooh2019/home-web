export default function authHeader() {
    const localUserInfo = localStorage.getItem("user");
    
    let user = null;
    if (localUserInfo) {
        user = JSON.parse(localUserInfo);
    }

    if (user && user.accessToken) {
        return {
            Authorization: `Bearer ${user.accessToken}`
        };
    } else {
        return {
            Authorization: ''
        };
    }
}