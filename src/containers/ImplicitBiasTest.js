import React from 'react';

// import { connect } from 'react-redux'
// import { increment, decrement, reset } from './actionCreators'
import Block from '../components/Block'
import Results from '../components/Results'
import TestNotFound from '../components/TestNotFound'
import TestStart from '../components/TestStart'
import tests from '../tests';

// const changeableState = {
//   compatibleTargetsToCategories: null,
//   currentBlock: null,
//   finished: false,
//   incompatibleTargetsToCategoriesMilliseconds: null,
//   compatibleTargetsToCategoriesMilliseconds: null
// }

export default function ImplicitBiasTest({ testId, currentState }) {
  const test = tests.find((test) => test.id === testId);
  if (!test) return (<TestNotFound />)
  if (!!currentState && !!currentState.currentBlock) return (<Block test={test} currentState={currentState} />)
  if (!!currentState && !!currentState.finished) return (<Results test={test} currentState={currentState} />)
  const startTest = () => {
    // redux action to set currentState
  }
  return (<TestStart test={test} startTest={startTest} />)
}
