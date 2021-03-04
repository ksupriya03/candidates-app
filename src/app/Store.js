import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import RootReducer from './reducers';

const middelWare = [thunkMiddleware];
const store = createStore(RootReducer, compose(applyMiddleware(...middelWare)));

export default store;
