import React from 'react'

function CondRender4() {
    let age = 7;
  return (
    <>
    {
        age >= 18  
        ? (age < 40 ? <h2>Eligible To Marry</h2> : <h2>Not Eligible, Too Old</h2> ) 
        : <h2>Sorry, Go to school</h2> 
    }
    </>
  )
}

export default CondRender4
