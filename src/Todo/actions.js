import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants"
export function setJob(payload) {
    return {
        type: SET_JOB,
        payload
    }
}
export function addJob(payload) {
    return {
        type: ADD_JOB,
        payload
    }
}
export function removeJob(payload) {
    return {
        type: REMOVE_JOB,
        payload
    }
}