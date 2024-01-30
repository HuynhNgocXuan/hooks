import { useRef, useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, removeJob } from "./actions";
import logger from "./logger";
function App() { 
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef();
    const { job, jobs } = state;
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{ marginLeft: 50 }}>
            <h2></h2>
            <input
                ref={inputRef}
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <span onClick={() => {
                                dispatch(removeJob(index))
                            }}> &times;</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App