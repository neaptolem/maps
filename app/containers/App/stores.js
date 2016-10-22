import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../dispatcher';

class AppStore extends ReduceStore {
  getInitialState() {
    console.log(sessionStorage.getItem('currentUser'));
    return {
      loggedIn: sessionStorage.getItem('currentUser') ? true : false
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {
          loggedIn: true
        });
      default:
        return state;
    }
  }
}

export default new AppStore(AppDispatcher);
