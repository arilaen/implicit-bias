import React from 'react'
import { Link } from 'react-router-dom'

import tests from '../data/tests'

export default function TestSelection() {
  return (
    <div>
        <h4 class="header center red-text text-darken-4">Pick an implicit association test to take:</h4>
      <section className="test-list">
      {tests.map(({name, description, id}) => (
        <div className="test-option" key={id}>
          <h4 class="header center grey-text"><Link to={`/test/${id}`}>{name}</Link></h4>
          <p class="center">{description}</p>
        </div>
      ))}
      </section>
    </div>
  )
}
