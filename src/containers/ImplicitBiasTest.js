import React from 'react';

class ImplicitBiasTest extends React.Component {
  // state() {
  //   return {
  //     categories: {
  //       happy: ['good', 'virtue'],
  //       sad: ['bad', 'vice'],
  //       work: ['deadlines', 'management'],
  //       family: ['kids', 'parents']
  //     },
  //     currentCategory: 'happy'
  //   }
  // }
  constructor(props) {
    super(props)
    this.state = {
      categories: {
        happy: ['good', 'virtue'],
        sad: ['bad', 'vice'],
        work: ['deadlines', 'management'],
        family: ['kids', 'parents']
      },
      currentCategory: 'happy'
    }
  }
  render() {
    const valuesToDisplay = this.state.categories[this.state.currentCategory]
    return (
      <div>{
        valuesToDisplay.map(value => {
          console.log('value', value);
          return <div key={value}>{value}</div>
        })
      }</div>
    )
     
  }
}

export default ImplicitBiasTest;
