import React, { useEffect, useState } from 'react'
import { Badge } from 'react-daisyui'
import {Hero} from 'react-daisyui'
import CourseCard from './CourseCard'
import lang1 from './img/language-01.jpg'
import lang2 from './img/language-02.jpg'
import lang3 from './img/language-03.jpg'
import axios from 'axios'
import backend from './config'
import { useLoaderData } from 'react-router-dom'


const LandingCourses = () => {
    const data = useLoaderData()
    
    
  return (
    <div className='flex flex-col items-center justify-center'>
        <Badge className='px-4 py-3 font-semibold text-gray-400 bg-cyan-100 border-none'>OUR COURSES</Badge>
        <Hero>
            <Hero.Overlay className="bg-opacity-0" />
            <Hero.Content className="text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Courses</h1>
                <p className="py-6 text-gray-400">
                Our courses offer exceptional quality content curated by expert instructors, ensuring an unparalleled learning experience for every user.
                </p>
                </div>
            </Hero.Content>
        </Hero>
        <div className='grid grid-cols-3 gap-12'>
            {/* <CourseCard img={lang1}/>
            <CourseCard img={lang3}/>
            <CourseCard img={lang2}/>
            <CourseCard img={lang2}/>
            <CourseCard img={lang1}/>
            <CourseCard img={lang3}/> */}
            {data.map(item=><CourseCard img={item.thumb} title={item.title} desc={item.description.substring(0,100)} id={item._id} price={item.price}/>)}
            
        </div>
    </div>
  )
}



export default LandingCourses