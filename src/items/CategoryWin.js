import React from 'react'
import CatCard from './CatCard'
import webimg from './img/web-design.jpg'
import personald from './img/personal-development.jpg'
import graphic from './img/graphic-design.jpg'
import soft from './img/software.jpg'
const CategoryWin = () => {
  return (
    <div className="flex justify-between mx-4 my-32 space-x-6">
        <CatCard img={webimg} title="Web Development"/>
        <CatCard img={personald} title="Personal Development"/>
        <CatCard img={graphic} title="Graphics Design"/>
        <CatCard img={soft} title="Software Development"/>
    </div>
  )
}

export default CategoryWin