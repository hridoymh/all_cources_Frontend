import React from 'react'

const CatCard = (props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl transition hover:scale-105">
        <figure><img src={props.img} alt="Shoes" /></figure>
        <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title">{props.title}</h2>
            <h4 className="text-gray-400 mt-[-8px]">{props.title}</h4>
            
        </div>
    </div>
  )
}

export default CatCard