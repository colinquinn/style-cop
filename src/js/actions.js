export var Actions = {
  FRONT_END_CLICK: 0,
  BACK_END_CLICK: 1,
  SET_COP: 2
}

export function createFrontEndClickAction() {
  return {
    type: Actions.FRONT_END_CLICK
  }
}

export function createBackEndClickAction() {
  return { 
    type: Actions.BACK_END_CLICK
  }
}

export function createSetCopAction(name, frontOrBack) {
  return {
    type: Actions.SET_COP,
    name: name,
    frontOrBack: frontOrBack
  }
}