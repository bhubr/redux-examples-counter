import Counter from './Counter'
import Navbar from './Navbar'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Counter />
      </div>
    )
  }
}
