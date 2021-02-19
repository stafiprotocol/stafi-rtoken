import { combineReducers } from 'redux';
import { History } from 'history'; 
import globalReducer from './globalClice';
import rDOTReducer from './rDOTClice'
export default function createRootReducer(history?: History) {
  return combineReducers({ 
    globalModule:globalReducer,
    rDOTModule:rDOTReducer
  });
}