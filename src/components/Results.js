import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { resetTest } from '../actions'
import BIAS from '../constants/Bias'
import { toTitleCase } from '../formatters'

const BIAS_THRESHOLD = 1000

const getBias = (incompatibleMilliseconds, compatibleMilliseconds) => {
  const incompatibleCompatibleDiff = incompatibleMilliseconds - compatibleMilliseconds
  if (Math.abs(incompatibleCompatibleDiff <= BIAS_THRESHOLD)) {
    return BIAS.NONE
  }
  return incompatibleCompatibleDiff > 0 ?
    BIAS.COMPATIBLE :
    BIAS.INCOMPATIBLE
}

const getResultStatement = (bias, test) => {
  const { targetType, categoryType, compatible } = test
  const targetsInCompatibleOrder = Object.keys(compatible)
  const categories = Object.values(compatible)
  const firstCategory = categories[0]
  const secondCategory = categories[1]
  switch(bias) {
    case BIAS.NONE:
      return `Your responses suggest no automatic association between ${targetType} and ${categoryType}.`
    case BIAS.COMPATIBLE:
      return `Your responses suggest an automatic association for ${toTitleCase(targetsInCompatibleOrder[0])} with ${toTitleCase(firstCategory)} and ${toTitleCase(targetsInCompatibleOrder[0])} with ${toTitleCase(secondCategory)}.`
    case BIAS.INCOMPATIBLE:
      const targetsInIncompatibleOrder = targetsInCompatibleOrder.slice().reverse()
      return `Your responses suggest an automatic association for ${toTitleCase(targetsInIncompatibleOrder[0])} with ${toTitleCase(firstCategory)} and ${toTitleCase(targetsInIncompatibleOrder[1])} with ${toTitleCase(secondCategory)}.`
    default:
      return 'We were unable to calculate your results due to an unexpected error.'
  }
}

const Results = ({ test, incompatibleMilliseconds, compatibleMilliseconds}) => {
  const bias = getBias(incompatibleMilliseconds, compatibleMilliseconds)
  const resultStatement = getResultStatement(bias, test)
  return (
    <div>
      <h2>Results</h2>
      <h3>{resultStatement}</h3>
      <p>More info about results to come...</p>
      <Link to="/home">Back to home</Link>
    </div>
  )
}

const mapStateToProps = ({ incompatibleMilliseconds, compatibleMilliseconds }) => {
  console.log('results state', incompatibleMilliseconds, compatibleMilliseconds)
  return {
    incompatibleMilliseconds,
    compatibleMilliseconds
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchResetTest: () => dispatch(resetTest())
})

const VisibleResults = connect(
  mapStateToProps,
  mapDispatchToProps 
)(Results)

export default VisibleResults