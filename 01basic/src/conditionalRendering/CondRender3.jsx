import React from 'react'

function CondRender3() {
    let isAuthenticated = true;
  return (
    <>
      {isAuthenticated && <button onClick={() => console.log("Logout")}>Click</button>}
    </>
  )
}

export default CondRender3

/**
 * Wh
 */
