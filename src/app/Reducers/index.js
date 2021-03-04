import { combineReducers } from 'redux';
// redux call
import candidates from './candidatesData';

const RootReducer = combineReducers({
  candidates,
});

export default RootReducer;
