import React from 'react'

export function TestStart({ test, startTest }) {
  return (
    <div>
      <h2>Welcome</h2>
      <p>You have selected the {test.name}</p> test. You will be asked to sort words into groups as quickly as you can.
      <button className="implicit-test-start-button" type="button" onClick={e => e.preventDefault() && startTest()}>Start test</button>
    </div>
  )
}
