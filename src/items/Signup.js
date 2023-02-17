import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [pstate,setPstate] = useState("");
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="UserName" className="input input-bordered" />
                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="confirm password" className="input input-bordered" />
                <label className="label">
                    <Link to="/forgot" className="label-text-alt link link-hover">{pstate}</Link>
                </label>
                </div>
                
                <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
                </div>
                <label className="label">
                <p className="label-text-alt">Already have account <Link to='/login' className='label-text-alt link link-hover font-bold'>Log In</Link></p>
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

export default Signup