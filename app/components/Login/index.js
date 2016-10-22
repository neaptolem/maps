import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleClick() {
    const handleLogin = this.props.handleLogin;
    handleLogin(this.state.usernameOrEmail, this.state.password);
  }

  handleUsername(e) {
    this.setState({ usernameOrEmail: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Login</legend>
            <section>
              <input placeholder="Username or email" onChange={this.handleUsername} />
            </section>
            <section>
              <input placeholder="Password" type="password" onChange={this.handlePassword}/>
            </section>
            <section>
              <button onClick={this.handleClick}>Login</button>
            </section>
          </fieldset>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func
};

export default Login;
