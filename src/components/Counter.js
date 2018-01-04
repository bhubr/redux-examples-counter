import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  increment, decrement
} from '../actions';

class UnboundCounter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button className="btn" onClick={onIncrement}>
          +
        </button>
        {' '}
        <button className="btn" onClick={onDecrement}>
          -
        </button>
        {' '}
        <button className="btn" onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button className="btn" onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

UnboundCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnboundCounter)

export default Counter
