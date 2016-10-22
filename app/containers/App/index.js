import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container } from 'flux/utils';
import Login from '../../components/Login';
import AppStore from './stores';
import { login, logout } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  };

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return {
      login: AppStore.getState()
    }
  }

  handleLogoutClick(e) {
    e.preventDefault();
    logout();
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
          <li onClick={this.handleLogoutClick}>Logout</li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container.create(App);
