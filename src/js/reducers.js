import { clone } from './clone'
import { Actions } from './actions'

export function rootReducer(store, action) {
  switch (action.type) {
    case Actions.BACK_END_CLICK:
      return clone(store).with({ 
        backEndCount: store.backEndCount + 1
      })
    case Actions.FRONT_END_CLICK:
      return clone(store).with({
        frontEndCount: store.frontEndCount + 1
      })
    default: 
      return store
  }
}