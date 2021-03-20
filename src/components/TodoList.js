import React from 'react'
import Todo from './Todo'


function TodoList(props) {
    // console.log(`todolist test ${props.todos}`)
    const todoData = props.todos;
    return (
        <div>
            <ul>
                {todoData.map(todo => (
                    // console.log(`fountain ${todo.todoInput}`)
                    <Todo key={todo.id} todo={todo} onDelete={props.onDelete} />
                ))}
                
            </ul>
        </div>
    )
}

export default TodoList
