import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { resetTest } from '../actions'
import BIAS from '../constants/Bias'
import { toTitleCase } from '../formatters'

const BIAS_THRESHOLD = 1000

const getBias = (incompatibleMilliseconds, compatibleMilliseconds) => {
  const incompatibleCompatibleDiff = incompatibleMilliseconds - compatibleMilliseconds
  if (Math.abs(incompatibleCompatibleDiff) <= BIAS_THRESHOLD) {
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
      return (
        <p className="result-headline">
          Your responses suggest no automatic association between <span className="target">{targetType}
          </span> and <span className="category">{categoryType}</span>.
        </p>
      )
    case BIAS.COMPATIBLE:
      return (
        <h4 className="result-headline">
          Your responses suggest an automatic association for <span className="target">
          {toTitleCase(targetsInCompatibleOrder[0])}
          </span> with <span className="category">{toTitleCase(firstCategory)}
          </span> and <span className="target">{toTitleCase(targetsInCompatibleOrder[1])}
          </span> with <span className="category">{toTitleCase(secondCategory)}
          </span>.
        </h4>
      )
    case BIAS.INCOMPATIBLE:
      const targetsInIncompatibleOrder = targetsInCompatibleOrder.slice().reverse()
      return (
        <h4 className="result-headline">
          Your responses suggest an automatic association for <span className="target">
          {toTitleCase(targetsInIncompatibleOrder[0])}
          </span> with <span className="category">{toTitleCase(firstCategory)}
          </span> and <span className="target">{toTitleCase(targetsInIncompatibleOrder[1])}
          </span> with <span className="category">{toTitleCase(secondCategory)}
          </span>.
        </h4>
      )
    default:
      return 'We were unable to calculate your results due to an unexpected error.'
  }
}

class Results extends Component {
  componentWillUnmount() {
    this.props.dispatchResetTest()
  }
  render() {
    const { test, currentTest } = this.props
    const { incompatibleMilliseconds, compatibleMilliseconds } = currentTest
    const bias = getBias(incompatibleMilliseconds, compatibleMilliseconds)
    const resultStatement = getResultStatement(bias, test)
    return (
      <div>
        <h2>Results</h2>
        {resultStatement}
        <p>More info about results to come...</p>
        <Link to="/home">Back to home</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchResetTest: () => dispatch(resetTest())
})

const VisibleResults = connect(
  () => ({}),
  mapDispatchToProps 
)(Results)

export default VisibleResults