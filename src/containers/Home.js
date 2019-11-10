import React from 'react'
import { Link } from 'react-router-dom'
import tests from '../tests'

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Implicit Bias Test</h2>
      <p>Choose a test to take:</p>
      <section className="test-list">{tests.map(({name, description, id}) => (
        <div className="test-option">
          <h3><Link to={`/test/${id}`}>{name}</Link></h3>
          <p>{description}</p>
        </div>
      ))}</section>
    </div>
  )
}
