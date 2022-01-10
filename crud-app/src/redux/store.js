import {createStore,applyMiddleware , compose,} from "redux";
import logger from "redux-logger" ;
import reduxThunk from "redux-thunk";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk" 


// STORE

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store; 