import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (data) =>{
        setTodos([...todos, data])
        // console.log(`yummy ${todos} `)
    }
    const  deleteTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const editTodo = (id) => {
        console.log(id)
    }
  return (
    <div className="App">
        <TodoForm onAdd={addTodo}/>
        <TodoList todos={todos} onDelete={deleteTodo} onEdit= {editTodo}/>
    </div>
  );
}

export default App;
