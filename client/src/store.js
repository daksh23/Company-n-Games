import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Components/reducer/rootReducer';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;