import AppDispatcher from '../../Dispatcher';


export function login(usernameOrEmail, password) {
  sessionStorage.setItem('currentUser', JSON.stringify({
    usernameOrEmail: usernameOrEmail,
    password: password
  }));
  AppDispatcher.dispatch({
    type: 'LOGIN_SUCCESS'
  });
}
