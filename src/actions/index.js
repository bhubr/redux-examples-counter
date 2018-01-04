import config from '../config';
const { tmdbApiKey } = config;

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN     = 'LOGIN';
export const LOGOUT    = 'LOGOUT';
// export const SET_QUERY = 'SET_QUERY';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function login(user) {
  return { type: LOGIN, user };
}

export function logout() {
  return { type: LOGOUT };
}
//
// export function setMovieQuery(query) {
//   return {
//     type: SET_QUERY,
//     query
//   };
// }

export function searchMovies(query) {
  return {
    type: SEARCH_MOVIES,
    query
  };
}

export function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json.results
  };
}

export function fetchMovies(query) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    console.log('fetchMovies', dispatch);
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(searchMovies(query));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    const q = encodeURIComponent(query);

    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${q}`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveMovies(json))
      );
  };
}
