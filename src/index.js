import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import {
  increment,
  decrement,
  login,
  logout
} from './actions';

const store = createStore(reducers, {
  counter: 10, session: null
})

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = 
store.subscribe(() =>
  console.log(store.getState())
)

console.log('dispatch increment');
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(login({ email: 'jonsnow@got.tv' }));
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(logout());
store.dispatch(login({ email: 'danaerystargaryen@got.tv' }));
store.dispatch(logout());

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)