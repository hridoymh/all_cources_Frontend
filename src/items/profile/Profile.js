import React from 'react'
import CourseCard from '../CourseCard'
import { useLoaderData } from 'react-router-dom'


const Profile = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <main className="py-10 w-full">
            <div className="container mx-auto px-4 flex">
                <div className="w-1/3">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="https://picsum.photos/200" alt="Avatar"/>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-medium text-gray-800">{data.name}</h2>
                                <p className="text-sm font-medium text-gray-500">{data.email}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 mt-6 pt-6">
                            <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Full Name</span>
                                    <span className="w-3/4 text-sm text-gray-800">{data.name}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Email</span>
                                    <span className="w-3/4 text-sm text-gray-800">{data.email}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Phone</span>
                                    <span className="w-3/4 text-sm text-gray-800">+8801710826032</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 ml-4">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">Completed Coureses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {
                                data.completedCourses.map(item=><CourseCard img={item.thumb} title={item.title} desc={item.description.substring(0,100)} id={item._id} />)
                            }
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">Enrolled Courses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {
                                data.enrolledCourses.map(item=><CourseCard img={item.thumb} title={item.title} desc={item.description.substring(0,100)} id={item._id} />)
                            }
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">My Courses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {
                                data.uploadedCourses.map(item=><CourseCard img={item.thumb} title={item.title} desc={item.description.substring(0,100)} id={item._id} />)
                            }
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </main>
  )
}

export const userloader = () => {
    console.log("ok")
    return "test"
}

export default Profile