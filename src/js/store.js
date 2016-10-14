import { rootReducer } from './reducers';

export function createStore(setState, initialStore) {
  let dispatch = function (action) {
    let store = this;
    let newStore = rootReducer(store, action);
    setState(newStore);
    if (action.hasOwnProperty('sideEffects')) {
      action.sideEffects(store);
    }
  };

  let store = initialStore;
  store.dispatch = dispatch.bind(store);

  //the weird pattern here because referencing the keyword 'this' in
  //dispatch needs to refer to the store itself.  You can't refer to
  //an object from within itself, so we have to create the store first,
  //then we can add the dispatch method to the store and bind 'this'
  //to refer to the store.

  return store;
}
