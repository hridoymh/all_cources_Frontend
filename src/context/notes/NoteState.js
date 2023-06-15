// import react, {useEffect, useState} from "react"
// import NoteContext from "./NoteContext"

// const NoteState = (props) => {
//     localStorage.setItem('login','false');
//     const [state, setState] = useState({
//         "login":false
//     })
//     const update = (x) => {
        
//         setState({"login":x});
//     }
//     useEffect(()=>{
//         localStorage.setItem('login',state.login.toString())
//         console.log(localStorage.getItem('login'))
//     })
//     return (
//         <NoteContext.Provider value={{state,update}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState;