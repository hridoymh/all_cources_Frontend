import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./items/Home";
import Login from "./items/Login";
import Signup from "./items/Signup";
import Courses from "./items/Courses";
import Learning from "./items/Learning";
import Profile from "./items/profile/Profile";
import AddCourses from "./items/AddCourses";
import { Routes,Route } from "react-router-dom";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/learn/:id' element={<Learning/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/addCourses' element={<AddCourses/>}/>
            
            
        </Routes>
    )
)

export default router