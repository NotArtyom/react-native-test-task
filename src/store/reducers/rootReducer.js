import {authReducer} from './authReducer';
import {refreshReducer} from './authReducer';
import { verifyReducer } from './authReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  refresh: refreshReducer,
  verify: verifyReducer,
});
export default rootReducer




