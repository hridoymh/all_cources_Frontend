import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import backend from './config'

const AddCourses = () => {
    const [title,setTitle] = useState("")
    const [desc,setdesc] = useState("")
    const [url,seturl] = useState("")
    const [price,setprice] = useState("")
    const [cat,setCat] = useState("web")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        
        let res = await axios.post(backend+"/addcourse",{title:title,description:desc,url:url,price:price,cat:cat},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
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
                  <input type="text" placeholder="Course Title" onChange={(e)=>setTitle(e.target.value)} className="input input-bordered" value={title} />
                </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Description</span>
                  </label>
                  <textarea type="text" placeholder="Course Description" onChange={(e)=>setdesc(e.target.value)} className="input input-bordered h-44 " value={desc} ></textarea>
                  </div>
                  
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Url</span>
                  </label>
                  <input type="text" placeholder="Course Url" onChange={(e)=>seturl(e.target.value)} className="input input-bordered" value={url} />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Price</span>
                  </label>
                  <input type="text" placeholder="Course Price" onChange={(e)=>setprice(e.target.value)} className="input input-bordered" value={price} />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Course Price</span>
                  </label>
                  <select onChange={e=>setCat(e.target.value)} value={cat} className="input input-bordered" >
                    <option value="web">Web Development</option>
                    <option value="personal">Personal Development</option>
                    <option value="software">Software Development</option>
                    <option value="programming">Programming</option>
                  </select>
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