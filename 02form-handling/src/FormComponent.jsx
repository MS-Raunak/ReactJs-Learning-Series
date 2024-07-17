import React, { useState } from 'react'


// Basic form handling

function FormComponent() {
    const [username, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [course, setCourse] = useState('react');

    const usernameHandler = (event) => {
        setUserName(event.target.value)
    }

    const commentHandler = (event) => {
        setComment(event.target.value)
    }

    const selectHandler = (event) => {
        setCourse(event.target.value)
    }

    const submitHandler = (event) => {
        if(username=='' || comment=='') alert("All field is mandatory")
        else alert(`${username} ${comment} ${course}`);
        // use to hold value even after submission of the form
        event.preventDefault(); 
        
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Username:</label>
                <input type="text" onChange={usernameHandler}/><br />

                <label >Comments</label>
                <textarea name="" id="" onChange={commentHandler}></textarea><br/>

                <label>Select course</label>
                <select value={course} onChange={selectHandler}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="java">Java</option>
                </select><br/>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default FormComponent
