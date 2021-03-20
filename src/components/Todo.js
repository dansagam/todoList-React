import React from 'react'


function Todo(props) {
    // console.log(`this test ${props.todo}`)
    return (
        <li>
            {props.todo.todoInput} 
            <span style={{color: 'red', cursor: 'pointer' }} 
                onClick={() => props.onDelete(props.todo.id)}> x </span>
            <span style={{color: 'blue', cursor: 'pointer' }}> E </span>
        </li>
    )
}

export default Todo
