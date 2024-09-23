import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', gap:'10px', flexWrap:'wrap', margin:'15px'}}>
        {
        todos.map((todo) => (
            <div style={{border:'2px solid red', display:'inline-block', padding:'7px'}}>
                <p key={todo.id}>{todo.text} </p>
                <button onClick={() => dispatch(removeTodo(todo.id))} >Remove</button>
            </div>
        ))}
      </div>
    </>
  )
}

export default Todos