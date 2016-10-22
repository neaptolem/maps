import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../dispatcher';
import { CHANGE_LOGIN_STATE } from './constants';

const userIsLoggedIn = () => {
  return sessionStorage.getItem('currentUser') ? true : false;
};

const redefineLoginState = state => {
  return Object.assign({}, state, {
    loggedIn: userIsLoggedIn()
  });
};

class AppStore extends ReduceStore {
  getInitialState() {
    return {
      loggedIn: userIsLoggedIn()
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case CHANGE_LOGIN_STATE:
        return redefineLoginState(state);
      default:
        return state;
    }
  }
}

export default new AppStore(AppDispatcher);
