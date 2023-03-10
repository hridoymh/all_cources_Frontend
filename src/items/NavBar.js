import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navbar bg-base-100">
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
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Log In</Link></li>
            </ul>
            </div>
            <img className="btn btn-ghost" src='logo.png' alt='logo'/>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Skills</Link></li>
            <li tabIndex={0}>
                <Link to='/courses'>
                Courses
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-slate-50">
                <li><Link to='/'>Submenu 1</Link></li>
                <li><Link to='/'>Submenu 2</Link></li>
                </ul>
            </li>
            <li><Link to='/login'>Blog</Link></li>
            <li><Link to='/login'>Log In</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link to='/signup' className="btn">Get started</Link>
        </div>
    </div>
    <Outlet></Outlet>
    </>
  )
}

export default NavBar