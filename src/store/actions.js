import {
    SET_TODO_INPUT,
    ADD_TODO_INPUT,
    REMOVE_TODO_INPUT,
    EDIT_TODO_INPUT
} from "./constants"

function setTodoInput(payload) {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}
function addTodoInput(payload) {
    return {
        type: ADD_TODO_INPUT,
        payload
    }
}
function removeTodoInput(payload) {
    return {
        type: REMOVE_TODO_INPUT,
        payload
    }
}
function editTodoInput(payload) {
    return {
        type: EDIT_TODO_INPUT,
        payload
    }
}


export { 
    setTodoInput, 
    addTodoInput,
    removeTodoInput,
    editTodoInput
}