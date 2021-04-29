
function AppReducer (state, action) {
    switch(action.type) {
        case 'GET_TODO':
            return {
                ...state,
                loading: false,
                todos: action.payload

            }
            // return `dsdd${
            //     console.log(action.type)}`
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            default:
                return state 
    }
}
export default AppReducer