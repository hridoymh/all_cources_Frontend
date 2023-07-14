import React, {useContext, useState} from 'react'
import Hero2 from './img/hero-2.png'
import Hero1 from './img/hero-1.png'
import Hero3 from './img/hero-3.png'
import Hero4 from './img/hero-4.png'
import { Link } from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'


const SliderTest = () => {
    const [modal,setModal] = useState(false)
    return (
        <>
        <div className="flex justify-between bg-gradient-to-r from-cyan-50 to-gray-100 w-full pt-28 pb-16">
            <div className='w-2/3 p-4 space-y-4'>
                <button className="btn btn-wide btn-ghost btn-active">ENJOY LEARNING!</button>
                <div className='text-5xl font-bold'>Every Free Resources in One Place</div>
                <div className="flex space-x-4">
                    <button className="btn btn-active" onClick={() => setModal(true)}>Book Live Session</button>
                    <Link to='/courses'><button className="btn btn-outline btn-primary">Find Courses</button></Link>
                </div>
            </div>
            <div className="w-1/3">
                <img src={Hero4} className='' alt="" srcset="" />
            </div>
            
        </div>
        {modal ? (
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
                      Book Live Session Now!
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mentor Email</span>
                        </label>
                        <input type="text" placeholder="Mentor Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <input type="text" placeholder="HH:MMpm/am" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={() => setModal(false)}>Book Live Session</button>
                        </div>
                        
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

export default SliderTest