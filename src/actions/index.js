export const START_TEST = 'START_TEST'
export const START_BLOCK = 'START_BLOCK'
export const SET_COMPATIBLE_MILLISECONDS = 'SET_COMPATIBLE_MILLISECONDS'
export const SET_INCOMPATIBLE_MILLISECONDS = 'SET_INCOMPATIBLE_MILLISECONDS'
export const FINISH_BLOCK = 'FINISH_BLOCK'
export const FINISH_TEST = 'FINISH_TEST'
export const RESET_TEST = 'RESET_TEST'

export const startTest = test => ({
  type: START_TEST,
  test
})

export const startBlock = () => ({
  type: START_BLOCK
})

export const setCompatibleMilliseconds = compatibleMilliseconds => ({
  type: SET_COMPATIBLE_MILLISECONDS,
  compatibleMilliseconds
})

export const setIncompatibleMilliseconds = incompatibleMilliseconds => ({
  type: SET_INCOMPATIBLE_MILLISECONDS,
  incompatibleMilliseconds
})

export const finishBlock = () => ({
  type: FINISH_BLOCK
})

export const finishTest = () => ({
  type: FINISH_TEST
})

export const resetTest = () => ({
  type: RESET_TEST
})
