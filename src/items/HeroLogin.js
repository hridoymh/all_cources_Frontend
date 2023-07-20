import React, { useState } from 'react'
import axios from 'axios'
import backend from './config'

const HeroLogin = () => {
    const [mentor,setMentor] = useState("")
    const [time,setTime] = useState("")
    const [date,setDate] = useState("")
    const booklive = async () => {
        if(localStorage.getItem("userStatus")=="loggedin"){
            let body = {
                mentorMail: mentor,
                time: time,
                date: date,
                student: localStorage.getItem("userEmail")
            }
            const res = await axios.post(backend+'/booklive',body)
            alert(res.data.status)
        }
        else{
            console.log("login first")
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Book Live Session Now!</h1>
            <p className="py-6">Live sessions provide a dynamic, interactive learning experience, enabling real-time communication between instructors and students for enhanced understanding and engagement.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Mentor Email</span>
                </label>
                <input type="text" placeholder="Mentor Email" className="input input-bordered" onChange={e=>setMentor(e.target.value)} value={mentor}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Time</span>
                </label>
                <input type="time" placeholder="Time" className="input input-bordered"  onChange={e=>setTime(e.target.value)} value={time}/>
                
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Time</span>
                </label>
                <input type="date" placeholder="Date" className="input input-bordered"  onChange={e=>setDate(e.target.value)} value={date}/>
                
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={booklive}>Book Live Session</button>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroLogin