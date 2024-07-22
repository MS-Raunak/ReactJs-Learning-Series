import React from 'react'

function Demo() {
    const fruits = ["banana", "apple", "guava", "pomagrantes"]
    return (
        <div>
            <ul>
                {
                    fruits.map((fruit, index) => 
                        (<li key={index}>{fruit}</li>)
                    )
                }
            </ul>
        </div>
    )
}

export default Demo
