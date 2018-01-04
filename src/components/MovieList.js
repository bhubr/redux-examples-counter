import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
      {movies.map(({ id, title, overview, poster_path }) =>
        <MovieItem key={id} title={title} overview={overview} poster={poster_path} />
      )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    movies: state.movies.items
  };
};

export default connect(
  mapStateToProps
)(MovieList);
