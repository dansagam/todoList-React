import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { TodoProvider } from './context/GlobalState';

function App() {
    const [todos, setTodos] = useState([])

    // const addTodo = (data) =>{
    //     if(!data.todoInput ) return
    //     setTodos([...todos, data])
    // }
    const onCompleted = (id) => {
        let updatedTodos = todos.map( todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updatedTodos)
    }
    // const  deleteTodo = (id) =>{
    //     setTodos([...todos].filter((todo) => todo.id !== id))
    // }
    const editTodo = (id, newValue) => {
        if(newValue.todoInput === '') return
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item )))
        console.log(id)
    }
  return (
      <TodoProvider >
          <div className="App">
            <h2>what is your plan for today</h2>
            <TodoForm /**onAdd={addTodo}*//>
            <TodoList 
                todos={todos} 
                /**onDelete={deleteTodo}*/ 
                onEdit={editTodo}  
                onCompleted={onCompleted}
                updateTodos={editTodo}/>

          </div>
      </TodoProvider>
  );
}

export default App;
