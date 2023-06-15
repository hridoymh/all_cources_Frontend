import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddCourses = () => {
    const [pstate,setPstate] = useState("");
    return (
      <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
              <div className="text-center">
              <h1 className="text-5xl font-bold">Add Course!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Title</span>
                  </label>
                  <input type="text" placeholder="Course Title" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Description</span>
                  </label>
                  <input type="text" placeholder="Course Description" className="input input-bordered" />
                  </div>
                  
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Url</span>
                  </label>
                  <input type="text" placeholder="Course Url" className="input input-bordered" />
                  </div>
                  
                  
                  <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                  </div>
                  
              </div>
  
              </div>
              <div className="text-center">
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              </div>
          </div>
      </div>
    )
}

export default AddCourses