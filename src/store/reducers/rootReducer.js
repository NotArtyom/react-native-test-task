import {authReducer} from './authReducer';
import {refreshReducer} from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  refresh: refreshReducer,
});
export default rootReducer




