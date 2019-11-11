import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { startTest } from '../actions'
import Block from '../components/Block'
import Results from '../components/Results'
import TestNotFound from '../components/TestNotFound'
import TestStart from '../components/TestStart'
import tests from '../data/tests'
import '../scss/implicit-bias-test.scss'

const ImplicitBiasTest = ({ currentTest, dispatchStartTest }) => {
  const { testId } = useParams();
  const test = tests.find((test) => test.id === testId);
  if (!test) return (<TestNotFound />)
  if (!!currentTest) {
    return !currentTest.finished ?
      <Block test={test} currentTest={currentTest} /> :
      <Results test={test} currentTest={currentTest} />
  }
  return (<TestStart test={test} onStartTestButtonPress={() => dispatchStartTest(test)} />)
}

const mapStateToProps = ({ currentTest }) => ({
  currentTest
})

const mapDispatchToProps = dispatch => ({
  dispatchStartTest: test => dispatch(startTest(test))
})

const VisibleImplicitBiasTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImplicitBiasTest)

export default VisibleImplicitBiasTest
