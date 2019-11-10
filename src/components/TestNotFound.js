import React from 'react'
import { Link } from 'react-router-dom'

export default function TestNotFound() {
  return (
    <div className="test-not-found">
      <h2>Test not found</h2>
      <p>We could not find a test with that id. You can find our full lists of tests at the <Link to="/home">home page</Link>.</p>
    </div>
  )
}
