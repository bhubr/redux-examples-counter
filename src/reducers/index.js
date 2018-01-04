import counter from './counter';
import session from './session';
import movies from './movies';
import users from './users';
import { combineReducers } from 'redux';

const reducers = combineReducers({ counter, session, movies, users });
export default reducers;
