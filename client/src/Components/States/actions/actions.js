import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST ,LOGIN_FAIL } from '../const.js';
import axios from 'axios'


const setBossImage = (image) => {
    localStorage.setItem('boss', image);

    return {type: 'SET_BOSS_IMAGE', image}
}

const SignUpAction = (User) => async(dispatch) => {

    try {

		dispatch({ type: SIGN_UP_REQUEST });

        const userData = User;

		const { data } = await axios.post('http://localhost:3030/api/user/signup', userData);

		console.log(data)

		dispatch({	
			type: SIGN_UP_SUCCESS,
			payload: data
		});

    } catch (e) {
        dispatch({
			type: SIGN_UP_FAIL,
			payload: e,
		});
    }
}

const LoginAction = (User) => async(dispatch, getState) => {

    try {

		dispatch({ type: LOGIN_REQUEST });

        const userData = User;

		const { data } = await axios.post('http://localhost:3030/api/user/login', userData);
		
		localStorage.setItem("token", data.data.token);
		dispatch({	
			type: LOGIN_SUCCESS,
			payload: data.data
		});
		

    } catch (e) {
        dispatch({
			type: LOGIN_FAIL,
			payload: e,
		});
    }
}

export {setBossImage, SignUpAction, LoginAction}