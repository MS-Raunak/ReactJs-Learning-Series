import { Component } from "react";

class Welcome2 extends Component {
    render() {
        return(
            <>
                <h2>Hello {this.props.name}</h2>
            </>
        )
    }
}

export default Welcome2;

/**
 * Props is just like a paramter which we can pass through
 * a component in React.
 * Props are mutable, we can't change the property of props.
 * Props can be send only parent to child componet only.
 * Functional Component: props
 * Class-based Component: this.props
 */