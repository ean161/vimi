import API from './api';

const googleLogin = async (userInfo) => {
    return API.post("https://vimi.ean.vn/models/google_login", {
        user: userInfo
    });
}

export default googleLogin;