import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, TOGGLE_MODEL} from '../const.js';

const userData = localStorage.getItem('userDetails');
const tokenData = localStorage.getItem('token');

const initialState = {
    loading: false,
    token: tokenData || "",
    user: JSON.parse(userData) || {},
    profile: {},
    loginModel: false,
    message:""
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_MODEL:
            return { ...state, loginModel: action.payload }
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, loading: false, token: action.payload.token, user: action.payload.user, profile: action.payload.profile, loginModel: false};
        case LOGIN_FAIL:
            return {...state, loading: false, message: action.payload};
        default:
            return state;
    }
}

export default LoginReducer;