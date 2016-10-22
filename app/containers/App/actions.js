import AppDispatcher from '../../dispatcher';
import { CHANGE_LOGIN_STATE } from './constants';

const sendChangeLoginAction = () => {
  AppDispatcher.dispatch({
    type: CHANGE_LOGIN_STATE
  });
};


export const login = (usernameOrEmail, password) => {
  sessionStorage.setItem('currentUser', JSON.stringify({
    usernameOrEmail: usernameOrEmail,
    password: password
  }));
  sendChangeLoginAction();
};


export const logout = () => {
  sessionStorage.removeItem('currentUser');
  sendChangeLoginAction();
};
