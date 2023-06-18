import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backend from './config'
import { Button } from 'react-daisyui'

const CourseCard = (props) => {
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)
    const enrollHandle = async ()=>{
        const res = await axios.post(backend+"/userdata",{id:"test"},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
        console.log(res.data)
        res.data.enrolledCourses.map(item=>{
            if(item._id === props.id){
                return navigate(`/learn/${props.id}`)
            }
        })
        setShowModal(true)
        
    }
    const enroll = async () => {
      const res = await axios.post(backend+"/enroll",{course:props.id},{headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}` }})
      console.log(res.data.status)
      if(res.data.status === "enrolled"){
        return navigate(`/learn/${props.id}`)
      }
    }
    
  return (
    <>
    <div className="card bg-base-100 shadow-xl transition hover:scale-105">
        <figure><img src={props.img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.desc.split("\n").map((item,idx)=>{
                return (
                    <span key={idx}>
                        {item}
                        <br/>
                    </span>
                )
            })}</p>
            <div className="card-actions justify-end">
                <Button onClick={enrollHandle} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
            </div>
        </div>
    </div>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Payment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                
                    <div className="h-auto w-80 bg-white p-3 rounded-lg">
                        
                        <div className="input_text mt-6 relative"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="John Row" /> <span className="absolute left-0 text-sm -top-4">Cardholder Name</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
                        <div className="input_text mt-8 relative"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span className="absolute left-0 text-sm -top-4">Card Number</span> <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
                        <div className="mt-8 flex gap-5 ">
                            <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span className="absolute left-0 text-sm -top-4">Expiry</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                            <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span className="absolute left-0 text-sm -top-4">CVV</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
                        </div>
                        <p className="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount: {props.price}Tk</p>
                        
                    </div>
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={enroll}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
  )
}

export default CourseCard