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
  }

  handleClick() {
    const handleLogin = this.props.handleLogin;
    handleLogin(this.state);
  }

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Login</legend>
            <section>
              <input placeholder="Username or email" />
            </section>
            <section>
              <input placeholder="Password" type="password" />
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
  handleLogin: PropTypes.func.isRequred
};

export default Login;
