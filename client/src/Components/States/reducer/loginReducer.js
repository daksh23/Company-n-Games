import {  LOGIN_SUCCESS, LOGIN_REQUEST ,LOGIN_FAIL } from '../const.js';

const LoginReducer = (state = { login:[] }, action) => {

  console.log(state);
  
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true }
    case LOGIN_SUCCESS:
      return {loading: false, login: action.payload };
    case LOGIN_FAIL:
      return { loading: false, login: action.payload };
    default:
      return state;
  }
}
  
export default LoginReducer;