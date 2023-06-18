import React, { useEffect } from 'react'
import Footer from './items/Footer'
import CategoryWin from './items/CategoryWin'
import HeroLogin from './items/HeroLogin'
import Login from './items/Login'
import LandingCourses from './items/LandingCourses'
import SliderTest from './items/SliderTest'
import WhyChUs from './items/WhyChUs'
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import Signup from './items/Signup'
import Courses from './items/Courses'
import Learning from './items/Learning'
import Profile, { userloader } from './items/profile/Profile'
import AddCourses from './items/AddCourses'
import { useContext } from 'react'
import NoteContext from './context/notes/NoteContext'
import Home from './items/Home'

const Mainbody = () => {
  const {state,dispatch} = useContext(NoteContext)

  useEffect(()=>{
    if(localStorage.getItem("userStatus")==="loggedin"){
      dispatch({type:"login",payload:true})
    }
  },[])

  return (
    <div className='all lg:w-4/5 flex flex-col items-center justify-center'>
      
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/learn/:id' element={<Learning/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/addCourses' element={<AddCourses/>}/>
        
        
      </Routes> */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Mainbody