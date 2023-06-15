import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'
import axios from 'axios'
import backend from './config'



const Login = () => {
    const {state,dispatch} = useContext(NoteContext)
    // useEffect(()=>{
    //     if(context.state.login) navigate("/signup");
    // },[])  
    
    

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const login = async(e) => {
        e.preventDefault()
        let body = {
            email: email,
            password: password
        }
        try {
            
            const res = await axios.post(backend+'/login',body)
            console.log(res.data)
            if(res.data.status === "success"){
                dispatch({type:"login",payload:true})
                localStorage.setItem("accessToken",res.data.accessToken)
                localStorage.setItem("userEmail",res.data.email)
                localStorage.setItem("userName",res.data.name)
                localStorage.setItem("userStatus","loggedin")
                alert(res.data.status)
                navigate("/")
            }
            else{
                alert("Something is wrong.")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
           
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={login}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  className="input input-bordered" />
                <label className="label">
                    <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Login</button>
                </div>
                </form>
                <label className="label">
                <p className="label-text-alt">Don't have account <Link to='/signup' className="label-text-alt link link-hover font-bold">Sign Up</Link></p>
                </label>
            </div>
            

            </div>
            
            <div className="text-center">
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
    </div>
  )
}

export default Login