

import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants"

export const initState = {
    job: '',
    jobs: []
}

function reducer(state, action) {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case REMOVE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: [...newJobs]
            }
        default:
            throw new Error("Invalid action type")
    }
}

export default reducer