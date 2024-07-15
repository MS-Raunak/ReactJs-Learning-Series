import React from 'react'

function ChildComponent({method}) {
  return (
    <div>
        <h2>Method as a Props</h2>
      <button onClick={() => method("Child")}>Click</button>
    </div>
  )
}

export default ChildComponent
