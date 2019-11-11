import React from 'react'
import { Link } from 'react-router-dom'

import tests from '../data/tests'

export default function TestSelection() {
  return (
    <div>
      <p>Choose a test to take:</p>
      <section className="test-list">
      {tests.map(({name, description, id}) => (
        <div className="test-option" key={id}>
          <h3><Link to={`/test/${id}`}>{name}</Link></h3>
          <p>{description}</p>
        </div>
      ))}
      </section>
    </div>
  )
}
