import React from 'react'
import '/css/styleComponent.css'


function StyleComponent() {
    const heading = {
        fontSize: '35px',
        backgroundColor: 'green',
        color: 'white'
    }
  return (
    <div>
      <h2 style={{color: 'red', fontSize: '34px', heading}}>Inline CSS</h2>
      <h2 style={heading}>Inline CSS(2nd way as object)</h2>
      <p className='fontSize fontColor'>CSS Stylesheet(External Style)</p>
    </div>
  )
}

export default StyleComponent
