import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import {
  increment,
  decrement,
  login,
  logout,
  // setMovieQuery,
  searchMovies,
  receiveMovies
} from './actions';
import movies1 from './fixtures/movies1';
import movies2 from './fixtures/movies2';
//
// import findById from './utils/findById';
//
// var arr = [{ id: 1, title: 'Her' }, { id: 2, title: 'Snatch' }];
// console.log('findById', findById(1, arr), findById(4, arr));

const store = createStore(reducers, {
  counter: 10, session: null
});

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe =
store.subscribe(() =>
  console.log(store.getState())
);

console.log('dispatch increment');
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(login({ email: 'jonsnow@got.tv' }));
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(logout());
store.dispatch(login({ email: 'danaerystargaryen@got.tv' }));
store.dispatch(logout());
store.dispatch(searchMovies('Phantom'));
store.dispatch(receiveMovies(movies1));
store.dispatch(searchMovies('Phantom of'));
store.dispatch(receiveMovies(movies2));

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
