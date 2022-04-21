import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Components/States/reducer/rootReducer';
import thunk from 'redux-thunk';

// const userData = localStorage.getItem('userData');

// const login = {
//     loading: false,
//     token: "",
//     user: JSON.parse(userData) || {},
//     profile: {},
//     loginModel: false,
//     message:""
// }

// const initialState = {login}

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;