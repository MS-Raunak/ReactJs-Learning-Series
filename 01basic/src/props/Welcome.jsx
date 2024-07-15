import React from "react";

const  Welcome = (props) => {
    return(
        <>
            <h2>Hello {props.name}</h2>
            <p>{props.children}</p>
        </>
    )
}

export default Welcome;

/**
 * Props is just like a paramter which we can pass through
 * a component in React.
 * Props are mutable, we can't change the property of props.
 * Props can be send only parent to child componet only.
 * Functional Component: props
 * Class-based Component: this.props
 */