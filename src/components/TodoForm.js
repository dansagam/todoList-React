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
        <div>
            <form id="todo-form" onSubmit={onSumbit}>
                <input 
                    type="text" 
                    value={todoInput} 
                    placeholder='Enter your todo list'
                    onChange={(e) => setTodoInput(e.target.value)}
                    />
                <button>Add Todo</button>
            </form>
            
        </div>
    )
}

export default TodoForm
