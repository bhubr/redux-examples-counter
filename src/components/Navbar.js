import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  login, logout
} from '../actions';

class UnboundNavbar extends Component {
  render() {
    const user = this.props.user
    const navContent = user ? (
      <ul>
        <li><a href="#" onClick={this.props.onLogout}>Logout { user.email }</a></li>
      </ul>
    ) : (
      <ul>
        <li><a href="#" onClick={this.props.onLogin}>Login</a></li>
      </ul>
    )
    return(
      <nav>
        {navContent}
      </nav>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(login({ email: 'jonsnow.tv' })),
    onLogout: () => dispatch(logout())
  }
}

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnboundNavbar)

export default Navbar