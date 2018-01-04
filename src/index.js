import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// import db from './db';
import {
  // increment,
  // decrement,
  // login,
  // logout,
  // setMovieQuery,
  // receiveMovies
  // searchMovies,
  registerUser
} from './actions';
// import movies1 from './fixtures/movies1';
// import movies2 from './fixtures/movies2';
import initStore from './initStore';
import persist from './persist';
// import {
//   init
// } from './db';
import config from './config';
const { storageKeys } = config;

// init();
const initialState = persist.load(storageKeys.state) || {};

// const usersState = persist.load(storageKeys.users);
// const { records } = usersState;
// initialState.users.items = [...records];
// persist.save(storageKeys.state, initialState);
const store = initStore(initialState);

//
// import findById from './utils/findById';
//
// var arr = [{ id: 1, title: 'Her' }, { id: 2, title: 'Snatch' }];
// console.log('findById', findById(1, arr), findById(4, arr));


// Log the initial state
// console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe =
store.subscribe(() =>
  persist.save(storageKeys.state, store.getState())
);

// console.log('dispatch increment');
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(login({ email: 'jonsnow@got.tv' }));
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(logout());
// store.dispatch(login({ email: 'danaerystargaryen@got.tv' }));
// store.dispatch(logout());
// store.dispatch(searchMovies('Phantom'));
// store.dispatch(receiveMovies(movies1));
// store.dispatch(searchMovies('Phantom of'));
// store.dispatch(receiveMovies(movies2));
// setTimeout(() => {
//   store.dispatch(registerUser({ email: 'toto.' + Date.now().toString(36) + '@pouet.com', password: 'toto' }));
// }, 400);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
