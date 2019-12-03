import React from 'react'
import TestSelection from '../components/TestSelection'

export default function Home() {
  return (
    <div>
    <h1 class="header center red-text text-darken-4">Implicit Association Tool</h1>
    <div class="row center">
        <h5 class="header col s12 light">
            <p>Uncover and discuss the underlying biases we share.</p>
        </h5> 
      </div>

      <div class="divider"></div>
      <TestSelection />
    </div>
  )
}
