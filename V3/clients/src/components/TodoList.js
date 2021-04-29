import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo'


function TodoList(props) {
    
    const { todos, getTodo} = useContext(GlobalContext)
    useEffect(() => {
        getTodo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <ul>
                {todos.map( (todo, index) => (
                    <div 
                        className={ todo.isComplete  ? 'complete' : ''} 
                        key={index} >
                        <Todo 
                            key={todo._id} 
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
