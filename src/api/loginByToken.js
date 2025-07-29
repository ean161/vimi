import API from './api';

const loginByToken = async (token) => {
    return API.post("https://vimi.ean.vn/models/login_by_token/", {
        token
    });
}

export default loginByToken;