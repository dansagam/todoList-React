import React,{useState, useContext} from 'react'
import  {FaEdit, FaTrash}  from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState';
import TodoForm from './TodoForm';




function Todo(props) {
    const {deleteTodo} = useContext(GlobalContext);
    // console.log(`this test ${props.todo}`)
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value  =>{
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''

        })
    } 
    if (edit.id) {
        return <TodoForm edit={edit} onAdd={submitUpdate} />
    }
    return (
        <li
            className='todo-row'  onClick={() => props.completeTodo(props.todo.id)}>
            {props.todo.todoInput} 
            <div className="icons">
                <FaTrash className="todo-row-delete" 
                    style={{color: 'red', cursor: 'pointer' }} 
                    onDoubleClick={() => deleteTodo(props.todo.id)}
                /> 
                <FaEdit 
                    onClick={() => setEdit({
                        id: props.todo.id,
                        value: props.todo.todoInput
                     })}   
                    className="todo-row-edit" 
                    style={{color: 'purple', cursor: 'pointer' }}
                /> 
                
            </div>
        </li>
    )
}


export default Todo
