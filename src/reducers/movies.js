import {
  // SET_QUERY,
  SEARCH_MOVIES,
  RECEIVE_MOVIES
} from '../actions';
import findById from '../utils/findById';

const initialState = {
  query: '',
  isFetching: false,
  itemsPerQuery: {},
  items: []
};


export default (state = initialState, action) => {
  switch (action.type) {
  // case SET_QUERY: {
  //   const { query } = action;
  //   return Object.assign({ ...state }, { query });
  // }
  case SEARCH_MOVIES: {
    const { query } = action;
    return Object.assign({ ...state }, { query, isFetching: true });
  }
  case RECEIVE_MOVIES: {
    console.log('RECEIVE_MOVIES', action);
    const { itemsPerQuery, items, query } = state;
    const { movies } = action;
    const newMovies = movies.filter(m => ! findById(m.id, items));
    const updatedMovies = [ ...items, ...newMovies ];
    return Object.assign({ ...state }, {
      isFetching: false,
      itemsPerQuery: Object.assign({ ...itemsPerQuery }, {
        [query]: movies
      }),
      items: updatedMovies
    });
  }
  default:
    return state;
  }
};
