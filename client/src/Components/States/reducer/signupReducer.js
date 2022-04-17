
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../const.js';

const signupReducer = (state = { signup:[] }, action) => {

  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { loading: true }
    case SIGN_UP_SUCCESS:
      return {loading: false, signup: action.payload };
    case SIGN_UP_FAIL:
      return { loading: false, signup: action.payload };
    default:
      return state;
  }
}
  
export default signupReducer;