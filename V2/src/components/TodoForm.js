import React, {useState} from 'react'

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState('');
    
    const onSumbit = (e) => {
        e.preventDefault()

        const addTodo = {
            id: Math.floor(Math.random() * 1000000 ),
            todoInput,
        }
        // console.log(addTodo)
        props.onAdd(addTodo)
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
