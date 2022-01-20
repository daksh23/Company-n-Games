import { combineReducers } from 'redux'
import SbiReducer from './SbiReducer';

const rootReducer = combineReducers({
   sbi : SbiReducer
})

export default rootReducer;