
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_UP_TOGGLE_MODEL } from '../const.js';

const initialState = {
  loading: false,
  signupModel: false,
  message:""
}

const signupReducer = (state = initialState, action) => {

  switch (action.type) {
    case SIGN_UP_TOGGLE_MODEL:
      return { ...state, loading:false, signupModel: action.payload }
    case SIGN_UP_REQUEST:
      return {...state, loading: true }
    case SIGN_UP_SUCCESS:
      return {...state, loading: false, signupModel: false};
    case SIGN_UP_FAIL:
      return {...state, loading: false, message: action.payload };
    default:
      return state;
  }
}
  
export default signupReducer;