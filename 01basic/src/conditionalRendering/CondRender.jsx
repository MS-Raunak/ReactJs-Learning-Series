import React from 'react'

//Conditional Rendering
function CondRender() {
    let isLoggedIn = false;
    
    return (
        <div>
            {isLoggedIn ? <h2 style={{color: 'green'}}>Welcome Chhaya</h2>: <h2 style={{color: 'red'}}>Not LoggedIn</h2>}
        </div>
    )
}


export default CondRender
