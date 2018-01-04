import React from 'react';
import { registerUser } from '../actions';
import { connect } from 'react-redux';

class Register extends React.Component {
  // https://reactjs.org/docs/forms.html#controlled-components
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    let changedValues = { [name]: value };
    this.setState((prevState, props) => Object.assign(
      { ...prevState }, changedValues
    ));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser(this.state);
  }

  render() {
    const { errorMessage } = this.props;
    const alertBox = ! errorMessage ? '' :
      (<div className="alert alert-danger">{ errorMessage }</div>);
    return (
      <div className="container">
        <section className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <legend>Register</legend>
                    {alertBox}

                    <div className="col-md-12 form-group">
                      <input
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    </div>

                    <div className="col-md-12 form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </div>
                  </fieldset>

                  <i className="divider"></i>
                  <button className="btn btn-primary mbtn" style={{ marginLeft: '15px' }}>Join</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.users.registerError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);