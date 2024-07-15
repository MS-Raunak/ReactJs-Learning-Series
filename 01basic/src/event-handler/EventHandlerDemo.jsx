import React, { useState } from 'react';

function EventHandlerDemo() {
    // Initialize state for input value
    const [inputValue, setInputValue] = useState('');

    const clickButton = () => alert("Button Clicked");

    // Update state on input change
    const changeButton = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Event Handler</h2>
            <button onClick={clickButton}>Click Here</button><br/><br/>
            <input type='text' onChange={changeButton} placeholder='type something...'></input><br/>
            <textarea value={inputValue} placeholder='see result here'></textarea>
        </div>
    );
}

export default EventHandlerDemo;
