import React from 'react'
import CatCard from './CatCard'
import webimg from './img/web-design.jpg'
import personald from './img/personal-development.jpg'
import graphic from './img/graphic-design.jpg'
import soft from './img/software.jpg'
import { Link } from 'react-router-dom'
const CategoryWin = () => {
  return (
    <div className="flex justify-between mx-4 my-32 space-x-6">
        <Link to={"cat/web"}><CatCard img={webimg} title="Web Development"/></Link>
        <Link to={"cat/personal"}><CatCard img={personald} title="Personal Development"/></Link>
        <Link to={"cat/programming"}><CatCard img={graphic} title="Programming"/></Link>
        <Link to={"cat/software"}><CatCard img={soft} title="Software Development"/></Link>
    </div>
  )
}

export default CategoryWin