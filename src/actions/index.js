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
