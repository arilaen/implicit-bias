import React from 'react'
import { connect } from 'react-redux'

import ActiveTest from './ActiveTest'
import BlockStart from './BlockStart'
import TargetAndOrCategory from './TargetAndOrCategory'
import TestError from './TestError'
import { startBlock } from '../actions'
import IMPLICIT_BIAS_TEST_BLOCKS from '../constants/ImplicitBiasTestBlocks'
import INPUT_KEYS from '../constants/InputKeys'
import { getDisplayValuesForType } from '../constants/TargetCategoryDisplayType'

const Block = ({ test, currentTest, dispatchStartBlock }) => {
  const currentBlock = IMPLICIT_BIAS_TEST_BLOCKS[currentTest.currentBlockIndex]
  if (!currentBlock) return <TestError />
  const { displayType } = currentBlock
  const { leftTarget, rightTarget, leftCategory, rightCategory } = getDisplayValuesForType(displayType, test.compatible)
  return (
    <div className="test-block">
      <section className="selection-groups">
        <div className="left-selection-group">
          <h6>Press "{INPUT_KEYS.LEFT}" for</h6>
          <TargetAndOrCategory target={leftTarget} category={leftCategory} />
        </div>
        <div className="right-selection-group">
          <h6>Press "{INPUT_KEYS.RIGHT}" for</h6>
          <TargetAndOrCategory target={rightTarget} category={rightCategory} />
        </div>
      </section>
      { currentTest.blockStarted ?
        <ActiveTest
          currentTest={currentTest}
          leftTarget={leftTarget}
          rightTarget={rightTarget}
          leftCategory={leftCategory}
          rightCategory={rightCategory}
        /> :
        <BlockStart
          currentBlockIndex={currentTest.currentBlockIndex}
          leftTarget={leftTarget}
          rightTarget={rightTarget}
          leftCategory={leftCategory}
          rightCategory={rightCategory}
          startBlock={() => dispatchStartBlock()}
        />
      }
    </div>
  )
}

const mapStateToProps = ({currentTest}) => ({
  currentTest
})

const mapDispatchToProps = dispatch => ({
  dispatchStartBlock: () => dispatch(startBlock())
})

const VisibleBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(Block)

export default VisibleBlock
