export var Actions = {
  FRONT_END_CLICK: 0,
  BACK_END_CLICK: 1
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