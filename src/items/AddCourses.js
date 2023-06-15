import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import backend from './config'

const AddCourses = () => {
    const [title,setTitle] = useState("")
    const [desc,setdesc] = useState("")
    const [url,seturl] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        
        let res = await axios.post(backend+"/addcourse",{title:title,description:desc,url:url},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
        alert(res.data.status)
        navigate("/")
    }
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
                  <input type="text" placeholder="Course Title" onChange={(e)=>setTitle(e.target.value)} className="input input-bordered" />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Description</span>
                  </label>
                  <input type="text" placeholder="Course Description" onChange={(e)=>setdesc(e.target.value)} className="input input-bordered" />
                  </div>
                  
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Url</span>
                  </label>
                  <input type="text" placeholder="Course Url" onChange={(e)=>seturl(e.target.value)} className="input input-bordered" />
                  </div>
                  
                  
                  <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
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