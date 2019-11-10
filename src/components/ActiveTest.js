import React from 'react'

export default class ActiveTest extends React.Component {
  constructor(props) {
    super(props)
    if (props.currentBlock && props.currentBlock.critical) {
      this.state = {
        timeElapsed: 0
      }
      // Update time
    }
  }
  render() {
    return (
      <div>

      </div>
    )
  } 
}
