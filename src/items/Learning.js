import React, { useEffect, useState } from 'react'
import testData from './test.json'
import { useLoaderData, useParams } from 'react-router-dom';
import backend from './config';
import axios from 'axios';



const Learning = () => {

  const {data,user} = useLoaderData()
  const [index,setindex] = useState(0)
  const [video,setVideo] = useState("")
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [modal,setModal] = useState(false)
  const [chats,setChats] = useState(data.chats)
  const [msg,setMsg] = useState("")
  const {id} = useParams()
  
  const chatClick = async () => {
    if(!modal){
      let email = localStorage.getItem("userEmail")
    }
    setModal(!modal)
  }
  
  const getChat = async () => {
    const res = await axios.get(backend+"/getmsg", { params: { courseId:id } });
    setChats(res.data)
  }

  const sendChat = async () => {
    let email = localStorage.getItem("userEmail")
    const res = await axios.get(backend+"/sendmsg", { params: { courseId:id, email: email, msg:msg } });
    setChats(res.data)
    setMsg("")
  }

  const vClick = (x,y,i) => {
    setVideo(x)
    setTitle(y.title)
    setDesc(y.description)
    setindex(i+1)
  }

  useEffect(()=>{
    console.log("from effect")
    const interval = setInterval(()=>{
      getChat()
    },5000)
    return ()=>{
      clearInterval(interval)
    }
  },[])

  const listItems = data.items.map((x,idx) => {
    
    return <div className="item flex w-full h-20 spa" onClick={()=>vClick(x.snippet.resourceId.videoId,x.snippet,idx)}>
      <div className="image w-1/4"><img src={x.snippet.thumbnails.default.url}/></div>
      <div className="titles w-3/4">
        <div className='font-bold text-sm'>{x.snippet.title.substring(0,70)+"..."}</div>
      </div>
    </div>});

  return (
    <>
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
                  <div className='text-sm text-gray-600'>Video : {index}/{data.items.length}</div>
                </div>
                <div className="list overflow-y-scroll h-96">
                  {listItems}
                </div>
            </div>
        </div>
        <button className='fixed bottom-4 btn btn-circle btn-info right-4 hover:btn-success' onClick={chatClick}>Chats</button>
    </div>
    {modal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Q & A
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={chatClick}
                >
                  <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                {chats.map((i)=>{
                  return (
                    <div className="space-y-[-10px]">
                        <p className='top-2 text-slate-400 font-mono text-sm'>{i.user}:</p>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          {i.msg}
                        </p>
                    </div>
                  )
                })}
              
                                
                
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <input type="text" onChange={(e)=>setMsg(e.target.value)} value={msg} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Write Questions'/>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={sendChat}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  )
}



export default Learning