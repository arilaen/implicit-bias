import React from 'react'
import { connect } from 'react-redux'

import TestError from './TestError'
import { finishBlock, finishTest, setCompatibleMilliseconds, setIncompatibleMilliseconds } from '../actions'
import IMPLICIT_BIAS_TEST_BLOCKS from '../constants/ImplicitBiasTestBlocks'
import INPUT_KEYS, { getEventKeyForInputKey } from '../constants/InputKeys'
import targetAndCategoryValues from '../data/targetAndCategoryValues'
import { toTitleCase } from '../formatters'
import TARGET_CATEGORY_DISPLAY_TYPE from '../constants/TargetCategoryDisplayType'

const TARGET_OR_CATEGORY = { // need to be lowercase - will be used as classes
  TARGET: 'target',
  CATEGORY: 'category'
}

const LEFT_OR_RIGHT = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const TARGET_CATEGORY_ORDER = [TARGET_OR_CATEGORY.TARGET, TARGET_OR_CATEGORY.CATEGORY]
const LEFT_RIGHT_OPTIONS = [LEFT_OR_RIGHT.LEFT, LEFT_OR_RIGHT.RIGHT]

class ActiveTest extends React.Component {
  constructor() {
    super()
    this.state = { currentRound: -1 }
  }
  componentDidMount() {
    if (!!this.props.currentBlock && this.props.currentBlock.critical) {
      this.setState({ timeStarted: Date.now() })
    }
    document.addEventListener('keyup', this.handleKeyPress)
    this.startNewRound()
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress)
    if (this.props.currentBlock.critical) {
      const totalTime = Date.now() - this.state.timeStarted
      this.props.currentBlock.displayType === TARGET_CATEGORY_DISPLAY_TYPE.COMPATIBLE_ALL ?
        this.props.dispatchSetCompatibleMilliseconds(totalTime) :
        this.props.dispatchSetIncompatibleMilliseconds(totalTime)
    }
    
    if (this.props.currentTest.currentBlockIndex  === IMPLICIT_BIAS_TEST_BLOCKS.length - 1) {
      this.props.dispatchFinishTest()
    }
  }
  valuesForOptions = (targetOrCategory, leftOrRight) => {
    if (targetOrCategory === TARGET_OR_CATEGORY.TARGET) {
      return leftOrRight === LEFT_OR_RIGHT.LEFT ?
        this.props.leftTargetValues :
        this.props.rightTargetValues
    }
    return leftOrRight === LEFT_OR_RIGHT.LEFT ?
      this.props.leftCategoryValues :
      this.props.rightCategoryValues
  }
  startNewRound = () => {
    const currentRound = this.state.currentRound + 1
    if (currentRound >= this.props.currentBlock.numTrials) {
      return this.props.dispatchFinishBlock()
    }
    const targetOrCategory = !!this.props.soleTargetOrCategory ?
      this.props.soleTargetOrCategory :
      TARGET_CATEGORY_ORDER[currentRound % 2]
    const leftOrRight = LEFT_RIGHT_OPTIONS[Math.round(Math.random())]
    const values = this.valuesForOptions(targetOrCategory, leftOrRight)
    const valuesWithoutLastTwoRoundValues = values.filter(v =>
      [this.state.valueToDisplay, this.state.lastValueToDisplay].indexOf(v) === -1)
    const valueToDisplayIndex = Math.floor(Math.random() * Math.floor(valuesWithoutLastTwoRoundValues.length - 1))
    const valueToDisplay = valuesWithoutLastTwoRoundValues[valueToDisplayIndex]
    return this.setState({
      currentRound,
      targetOrCategory,
      leftOrRight,
      valueToDisplay,
      lastValueToDisplay: this.state.valueToDisplay,
      incorrectKeyPressed: false
    })
  }
  handleKeyPress = (event) => {
    switch(event.key) {
      case getEventKeyForInputKey(INPUT_KEYS.LEFT):
        return this.handleLeftKeyPress()
      case getEventKeyForInputKey(INPUT_KEYS.RIGHT):
        return this.handleRightKeyPress()
      default:
        return
    }
  }
  handleLeftKeyPress = () => {
    if (this.state.leftOrRight === LEFT_OR_RIGHT.LEFT) {
      return this.startNewRound()
    } else if (this.state.leftOrRight === LEFT_OR_RIGHT.RIGHT) {
      this.displayIncorrectKeySign()
    }
  }
  handleRightKeyPress = () => {
    if (this.state.leftOrRight === LEFT_OR_RIGHT.RIGHT) {
      return this.startNewRound()
    } else if (this.state.leftOrRight === LEFT_OR_RIGHT.LEFT) {
      this.displayIncorrectKeySign()
    }
  }
  displayIncorrectKeySign = () => {
    this.setState({incorrectKeyPressed: true})
  }
  render() {
    const { currentBlock } = this.props
    const { valueToDisplay, targetOrCategory, incorrectKeyPressed } = this.state
    if (!currentBlock) return <TestError />
    return (
      <div>
        <div className={`displayed-test-value ${targetOrCategory}`}>{toTitleCase(valueToDisplay)}</div>
        <div className="incorrect-key-x">{incorrectKeyPressed && 'X'}</div>
        <p>If you make a mistake, a red <span className="bold-red">X</span> will appear. Press the other key to continue.</p>
      </div>
    )
  } 
}

const getSoleTargetOrCategory = (leftTarget, leftCategory) => {
  if (!!leftTarget && !leftCategory) return TARGET_OR_CATEGORY.TARGET
  if (!leftTarget && !!leftCategory) return TARGET_OR_CATEGORY.CATEGORY
  return null
}

const mapStateToProps = ({ currentTest }, { leftTarget, leftCategory, rightTarget, rightCategory }) => {
  return {
    currentTest,
    currentBlock: IMPLICIT_BIAS_TEST_BLOCKS[currentTest.currentBlockIndex],
    leftTargetValues: !!leftTarget ? targetAndCategoryValues[leftTarget] : null,
    rightTargetValues: !!rightTarget ? targetAndCategoryValues[rightTarget] : null,
    leftCategoryValues: !!leftCategory ? targetAndCategoryValues[leftCategory] : null,
    rightCategoryValues: !!rightCategory ? targetAndCategoryValues[rightCategory] : null,
    soleTargetOrCategory: getSoleTargetOrCategory(leftTarget, leftCategory)
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchFinishBlock: () => dispatch(finishBlock()),
  dispatchFinishTest: () => dispatch(finishTest()),
  dispatchSetCompatibleMilliseconds: millis => dispatch(setCompatibleMilliseconds(millis)),
  dispatchSetIncompatibleMilliseconds: millis => dispatch(setIncompatibleMilliseconds(millis))
})

const VisibleActiveTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTest)

export default VisibleActiveTest