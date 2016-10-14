import { rootReducer } from './reducers';
import { clone } from './clone';

export function createStore(setState, initialStore) {
  return clone(initialStore).with({
    dispatch: function(action) {
      let store = this;
      let newStore = rootReducer(store, action);
      setState(newStore);
      if (action.hasOwnProperty('sideEffects')) {
        action.sideEffects(store);
      }
    }
  })
}
