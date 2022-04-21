import {
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAIL,
    TOGGLE_MODEL,
    SIGN_UP_TOGGLE_MODEL
} from '../const.js';
import axios from 'axios'

const setBossImage = (image) => {
    localStorage.setItem('boss', image);

    return {type: 'SET_BOSS_IMAGE', image}
}

const SignUpAction = (User) => async(dispatch) => {

    try {

        dispatch({type: SIGN_UP_REQUEST});

        const userData = User;

        const {data} = await axios.post('http://localhost:3030/api/user/signup', userData);

        console.log(data)

        if (data.status) {
            dispatch({type: SIGN_UP_SUCCESS, payload: data});

        } else {
            dispatch({type: SIGN_UP_FAIL, payload: data.message});
        }

        dispatch({type: SIGN_UP_TOGGLE_MODEL, payload: false});

    } catch (e) {
        dispatch({type: SIGN_UP_FAIL, payload: e});
    }
}

const LoginAction = (User) => async(dispatch, getState) => {

    var message;

    try {

        dispatch({type: LOGIN_REQUEST});

        const userData = User;

        const {data} = await axios.post('http://localhost:3030/api/user/login', userData);

        console.log(data)

        if (!data.status) {
            message = data.message;
        }

        // use localstorage for session
        localStorage.setItem("token", data.data.token);

        // set userdata into local storage
        localStorage.setItem("userDetails", JSON.stringify(data.data.user));

        dispatch({type: LOGIN_SUCCESS, payload: data.data});

        dispatch({type: TOGGLE_MODEL, payload: false});

    } catch (e) {
        dispatch({type: LOGIN_FAIL, payload: message});
    }
}

export {setBossImage, SignUpAction, LoginAction}