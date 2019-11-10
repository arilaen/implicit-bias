import React from 'react'
import { Link } from 'react-router-dom'

export default function TestError() {
  return (
    <div className="error">
      <h2>Test error</h2>
      <div>
        Apologies, we encountered an unexpected error. Please try returning to the <Link to="/home">home page</Link>.
      </div>
    </div>
  )
}
