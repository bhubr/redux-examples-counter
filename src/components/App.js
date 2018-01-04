import Counter from './Counter';
import Navbar from './Navbar';
import MovieSearchBox from './MovieSearchBox';
import MovieList from './MovieList';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMovies
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(query) {
    const { dispatch } = this.props;
    console.log('App.onSubmit', query, this.props);
    dispatch(fetchMovies(query));
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-sm">
            <Counter />
          </div>
          <div className="col-sm">
            <MovieSearchBox onSubmit={this.onSubmit} />
            <MovieList />
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onChoseMovie: q => dispatch(fetchMovies(q))
//   };
// };

export default connect()(App);
