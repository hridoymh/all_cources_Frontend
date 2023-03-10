import React from 'react'
import testData from './test.json'


const Learning = () => {
  const listItems = testData.items.map((x) => 
    <div className="item flex w-full h-20 space-x-2">
      <div className="image w-1/4"><img src={x.snippet.thumbnails.default.url} alt="" srcset="" /></div>
      <div className="titles w-3/4">
        <div className='font-bold'>{x.snippet.title}</div>
      </div>
    </div>);

  return (
    <div className='w-full'>
        <div className='w-full flex justify-between'>
            <div className='w-2/3 p-4'>
                <div className="video">
                <iframe className='w-full h-96' src="https://www.youtube.com/embed/gFicda3xgKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="title font-bold text-xl my-2">১০ মিনিটে React - A top level overview</div>
            </div>
            <div className='w-1/3'>
                <div className="list">
                  {listItems}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learning