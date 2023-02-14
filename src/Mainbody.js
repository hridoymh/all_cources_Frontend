import React from 'react'
import Footer from './items/Footer'
import CategoryWin from './items/CategoryWin'
import HeroLogin from './items/HeroLogin'
import LandingCourses from './items/LandingCourses'
import Slider from './items/Slider'
import SliderTest from './items/SliderTest'
import WhyChUs from './items/WhyChUs'

const Mainbody = () => {
  return (
    <div className='lg:w-4/5 flex flex-col items-center justify-center'>
        <SliderTest/>
        <CategoryWin/>
        <LandingCourses/>
        <WhyChUs/>
        <HeroLogin/>
        <Footer/>
    </div>
  )
}

export default Mainbody