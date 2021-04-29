import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function TodoForm(props) {
    const {addTodo }= useContext(GlobalContext)
    const [text, setText] = useState('');
    // eslint-disable-next-line no-unused-vars
    
    const onSumbit = (e) => {
        e.preventDefault()

        const newTodo = {
            // id: Math.floor(Math.random() * 1000000 ),
            text,
        }
        // console.log(addTodo)
        addTodo(newTodo)
        setText('')
    }

    return (
        <div className="todolistform">
            <form id="todo-form" 
                className="form-container" onSubmit={onSumbit}>
                <input 
                className="todo-input"
                    type="text" 
                    value={text} 
                    placeholder='Enter your todo list'
                    onChange={(e) => setText(e.target.value)}
                    />
                <button className="todo-button">Add Todo</button>
            </form>
            
        </div>
    )
}

export default TodoForm
