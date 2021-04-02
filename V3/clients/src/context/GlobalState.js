import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState =  {
    todos: [
        {id: null, todoInput:  ''}
    ]
}

export const GlobalContext = createContext(initialState)
export const TodoProvider   = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function addTodo (todo) {
        dispatch({
            type:       'ADD_TODO',
            payload:    todo
        })
    }
    function deleteTodo (id) {
        dispatch({
            type:       'DELETE_TODO',
            payload:    id
        })
    }
    function editTodo (id) {
        dispatch({
            type:       'EDIT_TODO',
            payload:    id
        })
    }
    return <GlobalContext.Provider value= {
        {todos: state.todos,
            deleteTodo, addTodo, editTodo}
    }>
        {children}
    </GlobalContext.Provider>
}
