

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App









// import GlobalStyles from './components/GlobalStyles';
// import Button from './components/Button';

// function App() {
  
//   return (
//     <GlobalStyles>
//       <div style={{padding: '0 32px' }}>
//         <Button />
//         <Button primary />
//       </div>
//     </GlobalStyles>
//   );
// }

// export default App









// import Video from "./Video"
// import { useRef, useEffect } from 'react';

// function App() {

//   const videoRef = useRef();

//   const handlePlay = () => {
//     videoRef.current.play();
//   }
//   const handlePause = () => {
//     videoRef.current.pause();
//   }

//   return (
//     <div>
//       <Video ref={videoRef}/>
//       <div>
//         <button onClick={handlePlay}>Play</button>
//         <button onClick={handlePause}>Pause</button>
//       </div>
//     </div>
//   )
// }

// export default App












// import { useStore, actions } from './store'
// import { useRef } from 'react'

// function App() {
//   const inputRef = useRef()
//   const [state, dispatch] = useStore()
//   const {todos, todoInput} = state
//   const handleSubmit = () => {
//     dispatch(actions.addTodoInput(todoInput))
//     dispatch(actions.setTodoInput(''))
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         placeholder="Enter input..."
//         value={todoInput}
//         onChange={e => dispatch(actions.setTodoInput(e.target.value))} 
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <h2>Todos List</h2> 
//       <ul>
//         {
//           todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <span onClick={() => dispatch(actions.removeTodoInput(index))}> &times;</span>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App









// import Content from "./Content";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// function App() {
//   const themeValue = useContext(ThemeContext)
  
//   return (
//         <div style={{margin: 50 }}>
//           <button onClick={themeValue.handleToggle}>Toggle</button>
//           <Content />
//         </div>
//   )
// }

// export default App









// import TodoApp from './Todo';

// function App() {
//   return (
//     <TodoApp />
//   )
// }

// export default App












// import { useRef, useReducer } from "react";

// // 1. Initial
// const initState = {
//   job: '',
//   jobs: []
// }

// // 2. Actions
// const SET_JOB = 'set_job';
// const ADD_JOB = 'add_job';
// const REMOVE_JOB = 'remove_job';

// function setJob(payload) {
//   return {
//     type: SET_JOB,
//     payload
//   }
// }
// function addJob(payload) {
//   return {
//     type: ADD_JOB,
//     payload
//   }
// }
// function removeJob(payload) {
//   return {
//     type: REMOVE_JOB,
//     payload
//   }
// }

// // 3. Reducer
// function reducer(state, action) {
//   let newState 

//   switch(action.type) {
//     case SET_JOB:
//       newState = {
//         ...state, 
//         job: action.payload
//       }
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [action.payload, ...state.jobs]
//       }
//       break;
//     case REMOVE_JOB:
//       const newJobs = [...state.jobs]
//       newJobs.splice(action.payload, 1);
      
//       newState = {
//         ...state, 
//         jobs: newJobs
//       }
//       break;
//     default: 
//       throw new Error("Invalid action type" )
//   }
//   return newState
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initState)
//   const {job, jobs} = state
//   const inputRef = useRef()

//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob(''))
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <h2>Todo list</h2>
//       <input  
//         ref={inputRef}
//         value={job}
//         placeholder="Enter job..."
//         onChange={e => {
//           dispatch(setJob(e.target.value))
//         }}
//       />
//       <button 
//         onClick={handleSubmit}
//       >Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job} 
//             <span onClick={() => {
//               dispatch(removeJob(index))
//             }}> &times;</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App













// import { useReducer } from "react";

// const initState = 0;

// const ADD_ACTION = 'add';
// const DOWN_ACTION = 'down';


// function reducer(state, action) {
//   console.log('reducer')
//   switch(action) {
//     case ADD_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default: 
//       throw new Error('Invalid')
//   }
// }


// function App() {
//   const [count, dispatch] = useReducer(reducer, initState)

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button
//         onClick={() => 
//           dispatch(ADD_ACTION)
//         }
//       >
//         Add
//       </button>
//       <button
//         onClick={() => 
//           dispatch(DOWN_ACTION)
//         }
//       >
//         Down
//       </button>
//     </div>
//   )
// }


// export default App














// import { useMemo, useState, useRef } from "react"
// import { createStore } from 'https://cdn.skypack.dev/redux';
// function App() {

  
 
//   function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'counter/decremented':
//         return { value: state.value - 1 }
//       default:
//         return state
//     }
//   }

//   console.log(createStore(counterReducer))

//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])

//   const nameRef = useRef()


//   const handleSubmit = () => {
//     setProducts(prev => (
//       [...prev, {
//         name, 
//         price: +price,
//       }]
//     ))
//     setName('')
//     setPrice('')

//     nameRef.current.focus()
//   }

//   const total = useMemo(() => {
//     const result = products.reduce((result, product) => {
//       console.log('lai total')
//       return result + product.price;
//     }, 0)

//     return result;
//   }, [products])


//   return (
//     <div 
//       style={
//         {
//           marginLeft: 50, 
//           marginTop: 50,
//         }
//       }
//     >
//       <input 
//         ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input 
//         value={price}
//         placeholder="Enter price..."
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>
//         Add
//       </button>
//       <br />
//       Total: { total }
//       {
//         products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))
//       }
//     </div>
//   )
// }


// export default App





















// import { useState } from "react";
// import Content from "./Content";

// function App() {

//   const [show, setShow] = useState(false);
 
//   return (
//     <div style={{ paddingLeft: 50 }}>
//       <button style={{ marginTop: 20, marginRight: 10 }} onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content/>}
//     </div>
//   )
// }

// export default App;














// import { useState, useCallback } from "react"
// import Content from "./Content"

// function App() {
//   const [count, setCount] = useState(0)


//   const handleIncrease = useCallback(() => {
//     console.log(random)
//     setCount(prev => prev + random)
//   }, [random])

//   return (
//     <div style={{marginLeft: 40}}>
//       <Content 
//         onIncrease={handleIncrease}
//       />
//       <h1>{count}</h1>
//     </div>
//   )
// }


// export default App





















// import { useState } from "react";
// import Content from "./Content";

// function App() {

//   const [show, setShow] = useState(false);
 
//   return (
//     <div style={{ paddingLeft: 50 }}>
//       <button style={{ marginTop: 20, marginRight: 10 }} onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content/>}
//     </div>
//   )
// }

// export default App;
