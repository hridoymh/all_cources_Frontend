import React, { useState } from 'react'
import testData from './test.json'
import { useLoaderData } from 'react-router-dom';


const Learning = () => {

  const {data,user} = useLoaderData()
  const [video,setVideo] = useState("")
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const vClick = (x,y) => {
    setVideo(x)
	setTitle(y.title)
	setDesc(y.description)
  }
  const listItems = data.items.map((x) => {
    
    return <div className="item flex w-full h-20 spa" onClick={()=>vClick(x.snippet.resourceId.videoId,x.snippet)}>
      <div className="image w-1/4"><img src={x.snippet.thumbnails.default.url}/></div>
      <div className="titles w-3/4">
        <div className='font-bold text-sm'>{x.snippet.title.substring(0,70)+"..."}</div>
      </div>
    </div>});

  return (
    <div className='w-full'>
        <div className='w-full flex justify-between'>
            <div className='w-2/3 p-4'>
                <div className="video">
                <iframe className='w-full h-96'  src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="title font-bold text-xl my-2">{title}</div>
				<p>{desc}</p>
            </div>
            <div className='w-1/3 border p-2'>
                <div className='py-4 bg-gray-200 mb-2 px-2'>
                  <div className='font-bold text-xl'>{data.title}</div>
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