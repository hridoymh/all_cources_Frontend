import React from 'react'
import Footer from './items/Footer'
import CategoryWin from './items/CategoryWin'
import HeroLogin from './items/HeroLogin'
import Login from './items/Login'
import LandingCourses from './items/LandingCourses'
import SliderTest from './items/SliderTest'
import WhyChUs from './items/WhyChUs'
import {
  Routes,
  Route
} from 'react-router-dom'
import Signup from './items/Signup'

const Mainbody = () => {
  return (
    <div className='lg:w-4/5 flex flex-col items-center justify-center'>
      
      <Routes>
        <Route path='/' element={(
                                      <>
                                      <SliderTest/>
                                      <CategoryWin/>
                                      <LandingCourses/>
                                      <WhyChUs/>
                                      <HeroLogin/>
                                      
                                      </>
                                    )}/>
        <Route path='/login' element={
          <>
          <Login/>
          </>
        }/>
        <Route path='/signup' element={
          <>
          <Signup/>
          </>
        }/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default Mainbody