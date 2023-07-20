import { createBrowserRouter } from "react-router-dom";
import Home from "./items/Home";
import Login from "./items/Login";
import Signup from "./items/Signup";
import Courses from "./items/Courses";
import Learning from "./items/Learning";
import Profile from "./items/profile/Profile";
import AddCourses from "./items/AddCourses";
import App from "./App";
import axios from "axios";
import backend from "./items/config";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:async ()=>{
                    const res = await axios.get(backend+"/getcourses")
                    console.log(res.data)
                    return res.data
                }
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'courses',
                element:<Courses/>,
                loader:async ()=>{
                    const res = await axios.get(backend+"/getcourses")
                    
                    return res.data
                }
            },
            {
                path:'cat/:cat',
                element:<Courses/>,
                loader:async ({params})=>{
                    const res = await axios.get(backend+"/getcourses")
                    const data = res.data.filter(i=>{
                        if(i.cat===params.cat){
                            return i
                        }
                    })
                    console.log(data)
                    return data
                }
            },
            
            {
                path:'/learn/:id',
                element:<Learning/>,
                loader: async ({params})=>{
                    const res = await axios.get(backend+`/course/${params.id}`)
                    const data = await axios.post(backend+"/userdata",{test:"test"},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
                    console.log({data:res.data,user:data.data})
                    return {data:res.data,user:data.data}
                    
                }
            },
            {
                path:'/profile',
                element:<Profile/>,
                loader:async()=>{
                    const data = await axios.post(backend+"/userdata",{test:"test"},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
                    return data.data
                }
            },
            {
                path:'/addcourses',
                element:<AddCourses/>
            },
        ]
    },
    
    
])

export default router