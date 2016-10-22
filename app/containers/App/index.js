import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container } from 'flux/utils';
import Login from '../../components/Login';
import AppStore from './stores';
import { login } from './actions';

class App extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return {
      login: AppStore.getState()
    }
  }

  render() {
    const loginState = this.state.login;
    return !loginState.loggedIn ? (
      <Login handleLogin={login}/>
    ) : (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={"/maps"}>Maps</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container.create(App);
