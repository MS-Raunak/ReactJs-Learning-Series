import React, { useState } from 'react';

function TodoComponent() {
    const [todoTask, setTodoTask] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    //input value
    const inputValHandler = (event) => {
        setInputValue(event.target.value);
    };

    //Add task in the todo list
    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            if (isEditing) {
                const updatedTasks = [...todoTask];
                updatedTasks[currentTaskIndex] = inputValue;
                setTodoTask(updatedTasks);
                setIsEditing(false);
                setCurrentTaskIndex(null);
            } else {
                setTodoTask([...todoTask, inputValue]);
            }
            setInputValue(''); // Clear the input field after adding the task
        }
    };

    //Delete task
    const deleteTaskHandler = (index) => {
        const updatedTasks = todoTask.filter((task, i) => i !== index);
        setTodoTask(updatedTasks);
    };

    //Update task
    const editTaskHandler = (index) => {
        setInputValue(todoTask[index]);
        setIsEditing(true);
        setCurrentTaskIndex(index);
    };

    return (
        <>
            <h2 className='text-center'>To-do List</h2>

            <div className='mt-3'>
                <input 
                    type="text" 
                    className='p-1' 
                    value={inputValue} 
                    onChange={inputValHandler} 
                />
                <button 
                    className='btn btn-primary mb-1 mx-2' 
                    onClick={addTaskHandler}
                >
                    {isEditing ? 'Update Task' : 'Add Task'}
                </button>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    {
                        todoTask.map((task, idx) => (
                            <div className="col-md-3 mb-3" key={idx}>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{task}</p>
                                        <button 
                                            className='btn btn-danger' 
                                            onClick={() => deleteTaskHandler(idx)}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                            className='btn btn-warning mx-2' 
                                            onClick={() => editTaskHandler(idx)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default TodoComponent;
