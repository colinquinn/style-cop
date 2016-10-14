import { FrontOrBackEnd } from './App'
import { Actions } from './actions'
import { clone } from './clone'
import { map } from 'underscore'

export function rootReducer(store, action) {
  switch (action.type) {
    case Actions.FRONT_END_CLICK:
      return clone(store).with({ frontEndCount: store.frontEndCount + 1 })
    case Actions.BACK_END_CLICK:
      return clone(store).with({ backEndCount: store.backEndCount + 1 })
    case Actions.SET_COP:
      let switchCop = (devList) =>
        map(
          devList,
          dev =>
            dev.name === action.name
            ? clone(dev).with({ cop: true })
            : clone(dev).with({ cop: false })
        )
      if (action.frontOrBack === FrontOrBackEnd.FRONT_END)
        return clone(store).with({
          frontEnd: switchCop(store.frontEnd)
        })
      else
        return clone(store).with({
          backEnd: switchCop(store.backEnd)
        })
  }
}