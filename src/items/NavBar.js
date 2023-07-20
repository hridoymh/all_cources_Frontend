import { useContext, useState, useEffect } from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'

const NavBar = () => {
    const {state,dispatch} = useContext(NoteContext);
    const navigate = useNavigate()

    const logout = () => {
        dispatch({type:"login",payload:false})
        localStorage.setItem("accessToken","")
        localStorage.setItem("userEmail","")
        localStorage.setItem("userName","")
        localStorage.setItem("userStatus","loggedout")
        alert("Logged Out")
        navigate("/")
    }

    useEffect(()=>{
        if(localStorage.getItem("userStatus")==="loggedin"){
            navigate("/")
        }
    },[])
    
    const RenderButton = () => {
        if(state){
            return (<button onClick={logout} className="btn">Log out</button>)
        }else {
            return (<Link to='/signup' className="btn">get Started</Link>)
        }
    }
    const RenderMenu = () => {
        if(state) {
            return (
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Skills</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/addCourses'>Add Course</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>

                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Skills</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            )
        }
    }
  return (
    <>
    <div className="navbar bg-base-100 shadow">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link>Home</Link></li>
                <li><Link>Skills</Link></li>
                <li tabIndex={0}>
                <Link to='/courses' className="justify-between">
                    Courses
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-slate-50">
                    <li><Link to='/'>Submenu 1</Link></li>
                    <li><Link to='/'>Submenu 2</Link></li>
                </ul>
                </li>
                <li><Link to='/'>Log In</Link></li>
            </ul>
            </div>
            <img className="btn btn-ghost" src='logo.png' alt='logo'/>
        </div>
        <RenderMenu/>
        <div className="navbar-end">
            <RenderButton/>
        </div>
    </div>
    </>
  )
}

export default NavBar