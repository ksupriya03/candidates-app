import { combineReducers } from 'redux';
// redux call
import candidateHandlerReducer from './candidateData';

const RootReducer = combineReducers({
  candidate: candidateHandlerReducer,
});

export default RootReducer;
