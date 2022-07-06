import {
  INCREMENT,
  DECREMENT
} from './constants.js'

const initialState = {
  counter: 0
}

export function counterReducer(prestate=initialState, payload) {
  switch (payload.type) {
    case INCREMENT:
      return {...prestate, counter: prestate.counter + payload.num}
    case DECREMENT:
      return {...prestate, counter: prestate.counter - payload.num}
    default:
      return prestate
  }
}