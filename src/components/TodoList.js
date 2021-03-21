import React from 'react'
import Todo from './Todo'


function TodoList(props) {
    // console.log(`todolist test ${props.todos}`)
    const todoData = props.todos;
    return (
        <div>
            <ul>
                {todoData.map( (todo, index) => (
                    <div 
                        className={ todo.isComplete  ? 'complete' : ''} 
                        key={index} >
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            onDelete={props.onDelete} 
                            completeTodo={props.onCompleted} 
                            updateTodo={props.updateTodos}/>
                            
                  
                    </div>
                    ))}
                
            </ul>
        </div>
    )
}

export default TodoList
