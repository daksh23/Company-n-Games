import { combineReducers } from 'redux'
import SbiReducer from './SbiReducer';
import signupReducer from './signupReducer';
import LoginReducer from   './loginReducer';

const rootReducer = combineReducers({
   sbi : SbiReducer,
   signup: signupReducer,
   login: LoginReducer
})

export default rootReducer;