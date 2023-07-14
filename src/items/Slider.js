import React from 'react'
import Logo from './logo.png'
import Hero2 from './img/hero-2.png'
import Hero1 from './img/hero-1.png'
import Hero3 from './img/hero-3.png'
import Hero4 from './img/hero-4.png'

const Slider = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-cyan-50 to-gray-100 w-full pt-28 pb-16">
        <button className="btn btn-wide btn-ghost btn-active">ENJOY LEARNING!</button>
        <img src={Hero2} className='absolute top-20 w-1/6 lg:w-1/12 transition ease-linear delay-150 hover:-translate-y-10 duration-500' alt="" srcset="" />
        
        <img src={Hero4} className='w-1/5' alt="" srcset="" />
        
        <div className='text-5xl font-bold'>Every Free Resources in One Place</div>
        <div className="flex space-x-4">
            <button className="btn btn-active">Book Live Session</button>
            <button className="btn btn-outline btn-primary">Find Courses</button>
        </div>
    </div>
  )
}

export default Slider