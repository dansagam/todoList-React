import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo'


function TodoList(props) {
    const {todos} = useContext(GlobalContext)
    
    return (
        <div>
            <ul>
                {todos.map( (todo, index) => (
                    <div 
                        className={ todo.isComplete  ? 'complete' : ''} 
                        key={index} >
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            /**onDelete={props.onDelete}*/ 
                            completeTodo={props.onCompleted} 
                            updateTodo={props.updateTodos}/>
                            
                  
                    </div>
                    ))}
                
            </ul>
        </div>
    )
}

export default TodoList
