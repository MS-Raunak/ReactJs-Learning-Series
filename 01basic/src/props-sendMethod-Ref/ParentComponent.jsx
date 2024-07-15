import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    //This method will be executed when button click from child class
    const parentMethod = (childMsg) => alert(`Hello Parent From ${childMsg}`)
  return (
    <div>
      <ChildComponent method = {parentMethod} />
    </div>
  )
}

export default ParentComponent
