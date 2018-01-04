import counter from './counter';
import session from './session';
import { combineReducers } from 'redux';

const reducers = combineReducers({ counter, session });
export default reducers;