
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../const.js';

const signupReducer = (state = { }, action) => {

  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { loading: true }
    case SIGN_UP_SUCCESS:
      return {loading: false, success: action.payload };
    case SIGN_UP_FAIL:
      return { loading: false, fail: action.payload };
    default:
      return state;
  }
}
  
export default signupReducer;