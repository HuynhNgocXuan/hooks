import { 
    SET_TODO_INPUT, 
    ADD_TODO_INPUT, 
    REMOVE_TODO_INPUT,
    EDIT_TODO_INPUT 
} from "./constants"


const initState = {
    todos: [], 
    todoInput: ''
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT: 
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT: 
            return {
                ...state,   
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO_INPUT:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1)

            return {
                ...state,   
                todos: [...newTodos]
            }
        case EDIT_TODO_INPUT: 
            return {
                ...state,   
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid state @x')
    }
}

export { initState }
export default reducer