import React from 'react'
import testData from './test.json'


const Learning = () => {
  const listItems = testData.items.map((x) => {
    
    return <div className="item flex w-full h-20 spa">
      <div className="image w-1/4"><img src={x.snippet.thumbnails.default.url} alt="" srcset="" /></div>
      <div className="titles w-3/4">
        <div className='font-bold text-sm'>{x.snippet.title.substring(0,70)+"..."}</div>
      </div>
    </div>});

  return (
    <div className='w-full'>
        <div className='w-full flex justify-between'>
            <div className='w-2/3 p-4'>
                <div className="video">
                <iframe className='w-full h-96'  src="https://www.youtube.com/embed/eizIc5eQiEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="title font-bold text-xl my-2">১০ মিনিটে React - A top level overview</div>
            </div>
            <div className='w-1/3 border p-2'>
                <div className='py-4 bg-gray-200 mb-2 px-2'>
                  <div className='font-bold text-xl'>Course Name</div>
                  <div className='text-sm text-gray-600'>Video : 1/10</div>
                </div>
                <div className="list overflow-y-scroll h-96">
                  {listItems}
                </div>
            </div>
        </div>
    </div>
  )
}



export default Learning