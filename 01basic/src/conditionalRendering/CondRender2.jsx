import React from 'react'

function CondRender2() {
    const fruits = ["Apple", "Banana", "Grapes", "Guava"];
  return (
    <>
    
     { fruits.length > 0   ? 
        (<ul typeof='A'>{fruits.map((fruit, idx) => (<li key={idx}>{fruit}</li>) )}</ul>) 
        : <p>No items to display</p>
    }
    </>
    
  )
}

export default CondRender2
