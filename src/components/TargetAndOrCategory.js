import React from 'react'

export default function TargetAndOrCategory({ target, category }) {
  return (
    <div className="target-and-or-category">
      { !!target && (<div className="target">{target}</div>) }
      { !!target && !!category && <div className="or-separator">or</div>}
      { !!category && (<div className="category">{category}</div>) }
    </div>
  )
}
