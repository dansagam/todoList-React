
function AppReducer (state, action) {
    switch(action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
            default:
                return state 
    }
}
export default AppReducer