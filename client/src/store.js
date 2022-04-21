import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Components/States/reducer/rootReducer';
import thunk from 'redux-thunk';



var initialState = {  }

let store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store;