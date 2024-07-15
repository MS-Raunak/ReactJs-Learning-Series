import React from 'react'
import { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0)

    const incCount = () => setCount(count+1);
    const decCount = () => setCount(count-1);
    

    return(
        <>
            <h3>Counter:{count}</h3>
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount}>Decrement</button>
        </>
    )
}

export default Counter;