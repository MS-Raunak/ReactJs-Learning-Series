import React from 'react'
import { useState } from 'react';

function StateDemo() {
    const[msg, setMessage] = useState("Hello Chhaya");
    const[flag, setFlag] = useState(true);
    

    const changeMessage = () => {
        if (flag) {
            setMessage("Welcome Here..");
            setFlag(false)
        }
        else{
            setMessage("Hello Chhaya");
            setFlag(true)
        }

        
    }

    return(
        <>
            <h2>{msg}</h2>
            <button onClick={changeMessage}>Click Here</button>
        </>
    )
}

export default StateDemo;

/**
 * In React, "state" refers to a built-in object that is used to store property values that belong to a component. 
 * state is mutable, it means change the property of state
 * It is used to render dynamic value.
 * 
 * using useState() hook we can achieve this state.
 * useState(initialVal) takes one initial.
 */