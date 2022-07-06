import { legacy_createStore as createStore} from 'redux'
import {
  counterReducer
} from './reducers.js'

const store = createStore(counterReducer)

export default store