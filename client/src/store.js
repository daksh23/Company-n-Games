import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Components/reducer/rootReducer';
import thunk from 'redux-thunk';

const initialState = []

let store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;