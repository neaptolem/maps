import AppDispatcher from '../../Dispatcher';


export function login(usernameOrEmail, password) {
  localStorage.setItem('currentUser', JSON.stringify({
    usernameOrEmail: usernameOrEmail,
    password: password
  }));
  AppDispatcher.dispatch({
    type: 'LOGIN_SUCCESS'
  });
};
