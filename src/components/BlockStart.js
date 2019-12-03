import React, { Component } from 'react'
import Instructions from './Instructions'
import IMPLICIT_BIAS_TEST_BLOCKS from '../constants/ImplicitBiasTestBlocks'
import INPUT_KEYS, { getEventKeyForInputKey } from '../constants/InputKeys'

export default class BlockStart extends Component{
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress)
  }
  handleKeyPress = (event) => {
    if (event.key === getEventKeyForInputKey(INPUT_KEYS.START_KEY)) this.props.startBlock()
  }
  render() {
    const { currentBlockIndex, leftTarget, rightTarget, leftCategory, rightCategory } = this.props
    const displayIndex = currentBlockIndex + 1
    const numBlocks = Object.keys(IMPLICIT_BIAS_TEST_BLOCKS).length
    return (
      <div className="block-pre-test">
        <h3 class="header center red-text text-darken-4">Part {displayIndex} of {numBlocks}</h3>
        <div class="center">
        <Instructions
          currentBlockIndex={currentBlockIndex}
          leftTarget={leftTarget}
          rightTarget={rightTarget}
          leftCategory={leftCategory}
          rightCategory={rightCategory}
        />
      </div>
      </div>
    )
  }
}
