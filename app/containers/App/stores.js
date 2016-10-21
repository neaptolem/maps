import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../dispatcher';

class AppStore extends ReduceStore {
  getInitialState() {
    return {
      loggedIn: false
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return state;
      default:
        return state;
    }
  }
}

export default new AppStore(AppDispatcher);
