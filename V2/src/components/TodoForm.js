import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function TodoForm(props) {
    const {addTodo }= useContext(GlobalContext)
    const [todoInput, setTodoInput] = useState('');
    // eslint-disable-next-line no-unused-vars
    
    const onSumbit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 1000000 ),
            todoInput,
        }
        // console.log(addTodo)
        addTodo(newTodo)
        setTodoInput('')
    }

    return (
        <div className="todolistform">
            <form id="todo-form" 
                className="form-container" onSubmit={onSumbit}>
                <input 
                className="todo-input"
                    type="text" 
                    value={todoInput} 
                    placeholder='Enter your todo list'
                    onChange={(e) => setTodoInput(e.target.value)}
                    />
                <button className="todo-button">Add Todo</button>
            </form>
            
        </div>
    )
}

export default TodoForm
