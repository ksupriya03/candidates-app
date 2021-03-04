import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import RootReducer from './Reducers';

const isDevelopment = 'development';

const composeEnhancers = (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middelWare = [thunkMiddleware];

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(...middelWare)));

export default store;
