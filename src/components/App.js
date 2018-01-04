import Counter from './Counter';
import Navbar from './Navbar';
import MovieList from './MovieList';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-sm">
            <Counter />
          </div>
          <div className="col-sm">
            <MovieList />
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    )
  }
}
