import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  login, logout
} from '../actions';

class UnboundNavbar extends Component {
  render() {
    const user = this.props.user
    const navContent = user ? (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link" href="#" onClick={this.props.onLogout}>Logout { user.email }</a></li>
      </ul>
    ) : (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link" href="#" onClick={this.props.onLogin}>Login</a></li>
      </ul>
    )
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        {navContent}
        </div>
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
