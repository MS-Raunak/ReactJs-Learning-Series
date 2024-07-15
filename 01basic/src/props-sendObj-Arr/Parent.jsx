import React from 'react'
import Child from './Child'

function Parent() {

    //Object
    let personObj = {
        name: "Chhaya",
        age: 3,
        favCartoon: "Baby Shark"
    }

    //Array
    const fruits = ["Apple", "Banana", "Grapes"]

  return (
    <div>
        {/* object & array as props */}
      <Child person = {personObj} fruits = {fruits}/> 
    </div>
  )
}

export default Parent
