import { Actions } from './actions'
import { clone } from './clone'

export function rootReducer(store, action) {
  switch (action.type) {
    case Actions.FRONT_END_CLICK:
      return clone(store).with({ frontEndCount: store.frontEndCount + 1 })
    case Actions.BACK_END_CLICK:
      return clone(store).with({ backEndCount: store.backEndCount + 1 })
  }
}