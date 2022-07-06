import {
  INCREMENT,
  DECREMENT
} from './constants.js'

export const incAction = (num) => ({
  type: INCREMENT,
  num: num ?? 1
})

export const decAction = (num) => ({
  type: DECREMENT,
  num: num ?? 1
})