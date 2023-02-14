import React from 'react'
import Hero2 from './img/hero-2.png'
import Hero1 from './img/hero-1.png'
import Hero3 from './img/hero-3.png'
import Hero4 from './img/hero-4.png'


const SliderTest = () => {
    return (
        <div className="flex justify-between bg-gradient-to-r from-cyan-50 to-gray-100 w-full pt-28 pb-16">
            <div className='w-2/3 p-4 space-y-4'>
                <button className="btn btn-wide btn-ghost btn-active">ENJOY LEARNING!</button>
                <div className='text-5xl font-bold'>Every Free Resources in One Place</div>
                <div className="flex space-x-4">
                    <button className="btn btn-active">Sign Up</button>
                    <button className="btn btn-outline btn-primary">Find Courses</button>
                </div>
            </div>
            <div className="w-1/3">
                <img src={Hero4} className='' alt="" srcset="" />
            </div>
            
        </div>
      )
}

export default SliderTest