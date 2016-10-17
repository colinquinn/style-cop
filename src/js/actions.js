import { FrontOrBackEnd } from './App'
export var Actions = {
  FRONT_END_CLICK: 0,
  BACK_END_CLICK: 1,
  SET_COP: 2
}

export function createClickCountButton(frontOrBack) {
  let type = frontOrBack === FrontOrBackEnd.FRONT_END
    ? Actions.FRONT_END_CLICK
    : Actions.BACK_END_CLICK

  return {
    type: type 
  }
}
