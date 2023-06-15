import React from 'react'
import SliderTest from './SliderTest'
import CategoryWin from './CategoryWin'
import WhyChUs from './WhyChUs'
import LandingCourses from './LandingCourses'
import axios from 'axios'
import backend from './config'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
    // const data = useLoaderData()
  return (
    <>
    <SliderTest/>
    <CategoryWin/>
    <LandingCourses/>
    <WhyChUs/>
    {/* <HeroLogin/> */}
    </>
  )
}



export default Home