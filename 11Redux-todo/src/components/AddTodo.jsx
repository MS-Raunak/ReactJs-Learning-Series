import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const [warningMsg, setWarningMsg] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        if(input.trim()==''){
            setWarningMsg('blank space is now allowed, Please provide some text...')
            return;
        }
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        setWarningMsg('')
    }

  return (
  <> 
     <p style={{color: 'red'}}>{warningMsg}</p>
      <input type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{padding: '10px'}}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
    </>
  )
}

export default AddTodo