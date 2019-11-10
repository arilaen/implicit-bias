import React from 'react'

import ActiveTest from './ActiveTest'
import BlockStart from './BlockStart'
import TargetAndOrCategory from '../components/TargetAndOrCategory'
import TestError from '../components/TestError'
import IMPLICIT_BIAS_TEST_BLOCKS from '../constants/ImplicitBiasTestBlocks'
import { getDisplayValuesForType } from '../constants/TargetCategoryDisplayType'

export function Block({ test, currentState }) {
  const currentBlock = IMPLICIT_BIAS_TEST_BLOCKS[currentState.currentBlockIndex]
  if (!currentBlock) return (<TestError />)
  const { displayType } = currentBlock
  const { leftTarget, rightTarget, leftCategory, rightCategory } = getDisplayValuesForType(displayType, test.compatibleTargetsToCategories)
  return (
    <div className="test-block">
      <section className="selection-groups">
        <div className="left-selection-group">
          <h6>Press "E" for</h6>
          <TargetAndOrCategory target={leftTarget} category={leftCategory} />
        </div>
        <div className="right-selection-group">
          <h6>Press "I" for</h6>
          <TargetAndOrCategory target={rightTarget} category={rightCategory} />
        </div>
      </section>
      { currentState.started ? <ActiveTest test={test} currentBlock={currentBlock} /> : <BlockStart test={test} currentBlock={currentBlock} />}
    </div>
  )
}
