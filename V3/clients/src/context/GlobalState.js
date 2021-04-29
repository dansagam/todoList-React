import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios    from 'axios'

const initialState =  {
    todos: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)
export const TodoProvider   = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    async function getTodo() {
        try {
            axios
                .get('/api/v3/todos')
                .then(res => {
                    dispatch({
                        type:           'GET_TODO',
                        payload:        res.data.data
                    });
                })
            
        } catch (err) {
            console.log(`fighting to see the error ${err}`)
        }
    }
    async function addTodo (todo) { 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            axios
                .post('/api/v3/todos', todo, config)
                .then(res => {
                    dispatch({
                        type:       'ADD_TODO',
                        payload:    res.data.data
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }
    async function deleteTodo (id) {
        try {
            axios
                .delete(`/api/v3/todo/${id}`)
                .then( res => {
                    dispatch({
                        type:       'DELETE_TODO',
                        payload:    id
                    })
                })
        } catch (err) {
            console.log(`react side of the delete Error ${err}` )
        }
    }
    async function editTodo (id) {
        dispatch({
            type:       'EDIT_TODO',
            payload:    id
        })
    }
    return <GlobalContext.Provider value= {
        {todos: state.todos,
            deleteTodo, getTodo, addTodo, editTodo}
    }>
        {children}
    </GlobalContext.Provider>
}
