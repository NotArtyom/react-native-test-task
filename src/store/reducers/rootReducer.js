import {authReducer} from './authReducer';
import {refreshReducer} from './authReducer';
import { verifyReducer } from './authReducer';
import { lessonReducer } from './lessonReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  refresh: refreshReducer,
  verify: verifyReducer,
  lessons: lessonReducer,
});
export default rootReducer




