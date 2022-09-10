import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';

const intialState = {};

const middleware = [thunk];

const Store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))

    
);



export default Store;