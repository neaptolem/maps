import { ReduceStore } from 'flux/utils';

import AppDispatcher from '../dispatcher';

class MapsStore extends ReduceStore {
  getInitialState() {
    return [{
        "id": "1",
        "name": "map1",
        "svg":''
      },
      {
        "id": "3",
        "name": "map3"
      }];
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ADD_MAP':
        return state;
      default:
        return state;
    }
  }
}

export default new MapsStore(AppDispatcher);
