import counter from './counter';
import session from './session';
import movies from './movies';
import { combineReducers } from 'redux';

const reducers = combineReducers({ counter, session, movies });
export default reducers;
