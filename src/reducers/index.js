import { combineReducers } from 'redux'
import {
  START_TEST,
  START_BLOCK,
  SET_COMPATIBLE_MILLISECONDS,
  SET_INCOMPATIBLE_MILLISECONDS,
  FINISH_BLOCK,
  FINISH_TEST,
  RESET_TEST
} from '../actions'

const initialState = {
  blockStarted: false,
  finished: false,
  currentBlockIndex: 0,
  test: null,
  compatibleMilliseconds: null,
  incompatibleMilliseconds: null
}

function currentTest(state = initialState, action) {
  switch (action.type) {
    case START_TEST:
      return Object.assign({}, state, { test: action.test, currentBlockIndex: 0 })
    case START_BLOCK:
      return Object.assign({}, state, { blockStarted: true })
    case FINISH_BLOCK:
      return Object.assign({}, state, { currentBlockIndex: state.currentBlockIndex + 1, blockStarted: false })
    case SET_COMPATIBLE_MILLISECONDS:
      return Object.assign({}, state, { compatibleMilliseconds: action.compatibleMilliseconds })
    case SET_INCOMPATIBLE_MILLISECONDS:
      return Object.assign({}, state, { incompatibleMilliseconds: action.incompatibleMilliseconds }) 
    case FINISH_TEST:
      return Object.assign({}, state, { finished: true, blockStarted: false })
    case RESET_TEST:
      return initialState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentTest
})

export default rootReducer