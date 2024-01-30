import Paragraph from "./Paragraph";

function Content() {
    return (
        <Paragraph/>
    )
}

export default Content;
 










// import { memo } from "react"

// function Content({ onIncrease }) {
//     console.log('re-render')

//     return (
//        <>
//             <h3>Content</h3>
//             <button
//                 onClick={onIncrease}
//             >
//                 Add
//             </button>
//        </>
//     )
// }


// export default memo(Content)












// import { useState, useRef, useEffect } from "react";

// function Content() {
//     const [count, setCount] = useState(60);
    
//     const timerId = useRef();
//     const prevCount = useRef();
//     const h1Ref = useRef();

//     useEffect(() => {
//         console.log(h1Ref)
//         console.log('effect')
//         prevCount.current = count;
//     }, [count])

//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             setCount(prev => prev - 1)
//         }, 1000)

//         console.log('a', timerId.current)
//     }

//     const handleStop = () => {
//         clearInterval(timerId.current)

//         console.log('o', timerId.current)
//     }

//     console.log(count, prevCount.current)

//     return (
//         <div>
//             <h1 ref={h1Ref}>
//                 {count}
//                 {console.log('element')}
//             </h1>
//             <button
//                 onClick={handleStart}
//             >
//                 Start
//             </button>
//             <button
//                 onClick={handleStop}
//             >
//                 Stop
//             </button>
//         </div>
//     )
// }
 
// export default Content;






// import { useState, useEffect } from "react";

// const lessons = [
//     {
//         id: 1,
//         name: 'ReactJS là gì? Tại sao nên học'
//     },
//     {
//         id: 2,
//         name: 'SPA/MPA là gì?'
//     },
//     {
//         id: 3,
//         name: 'Arrow function'
//     },
    
// ]

// function Content() {

//     const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {

//         const handleComment = ({ detail }) => {
//             console.log(detail);
//         }

//         window.addEventListener(`lesson-${lessonId}`, handleComment)

//         return (() => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         })

//     }, [lessonId])

//     return (
//         <div>
//             <ul>
//                 {
//                     lessons.map(lesson => (
//                         <li
//                             key={lesson.id}
//                             onClick={() => {
//                                 setLessonId(lesson.id)
//                             }}
//                             style={{
//                                 color: lesson.id === lessonId ? 'red' : null,
//                                 cursor: 'pointer',
//                                 fontWeight: lesson.id === lessonId ? 600 : 400
//                             }}
//                             >
//                             {lesson.name}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Content;








// import { useEffect, useState } from "react";

// function Content() {

//     const [avatar, setAvatar] = useState();

//     useEffect(() => {

//         return (() => {
//             URL.revokeObjectURL(avatar);
//         })
//     }, [avatar])

//     const handleAvatar = (e) => {
//         const file = e.target.files[0];  
//         const img = URL.createObjectURL(file);
//         setAvatar(img)
//         e.target.value = null;

//     }


//     return (
//         <div>
//             <input 
//                 type="file"
//                 onChange={handleAvatar}
//             />

//             {
//                 avatar && (
//                     <img src={avatar} alt="Ảnh lỗi" width="50%" />
//                 )
//             }
//         </div>
//     )
// }

// export default Content;




// import { useState } from "react";

// const courses = [
//     {
//         id: 1,
//         name: 'Java'
//     },
//     {
//         id: 2,
//         name: 'React'
//     },
//     {
//         id: 3,
//         name: 'NodeJS'
//     }
// ]

// function Content() {
//     const [checked, setChecked] = useState([])

//     const handleSubmit = () => {
//         console.log(checked)
//     }


//     const handleCourse = (id) => {
//         setChecked((prev) => {
//             const isChecked = checked.includes(id);
//            if (isChecked) {
//                 return checked.filter(item => item !== id);
//            }
//            else {
//             return [...prev, id]
//            }
//         })
//     }
    
//     return (
//         <div>
//             {
//                 courses.map((course) => (
//                     <div key={course.id}>
//                         <input 
//                             checked={checked.includes(course.id)}
//                             type='checkbox'
//                             onChange={() => handleCourse(course.id)}
//                         />
//                         {course.name}
//                     </div>
//                 ))
//             }
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }
 
// export default Content;

// import { useState } from "react";
// import { useEffect } from "react";

// const tabs = ['posts', 'albums', 'todos'];

// function Content() {
//     const [type, setType] = useState('posts');
//     const [titles, setTitles] = useState([]);
//     const [showGoTop, setShowGoTop] = useState(false);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(response => response.json()) 
//             .then(titles => {
//                 setTitles(titles)
//             })
//     }, [type])

//     useEffect(() => {

//         const handleScroll = () => {
//             setShowGoTop(window.scrollY >= 200);
//         }
        
//         window.addEventListener('scroll', handleScroll)
//         console.log('add')

//         return (() => {
//             window.removeEventListener('scroll', handleScroll)
//             console.log('remove')
//         })
//     }, [])

//     return (
//         <div>
//             {
//                 tabs.map(tab => (
//                     <button
//                         onClick={() => setType(tab)} 
//                         style={type === tab ? {
//                             color: 'yellow',
//                             backgroundColor: 'blue',
//                         } : {}}
//                         key={tab}
//                     >
//                         {tab}
//                     </button>
//                 ))
//             }
//             <ul>
//                 {
//                     titles.map(title => (
//                         <li key={title.id}>{title.title}</li>
//                     ))
//                 }
//             </ul>
//             {
//                 showGoTop && (
//                     <button
//                         style={{ 
//                             position: 'fixed', 
//                             right: 20, 
//                             bottom: 40,
//                             backgroundColor: 'red',
//                             color: 'white',
//                             border: '1px solid black',
//                             borderRadius: 2
//                         }}
//                     >
//                         Go Top
//                     </button>
//                 )
//             }
//         </div>
//     )
// }
 
// export default Content;