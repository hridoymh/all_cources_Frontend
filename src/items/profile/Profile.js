import React from 'react'
import CourseCard from '../CourseCard'
import { useLoaderData } from 'react-router-dom'


const Profile = () => {
    
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
                                <h2 className="text-lg font-medium text-gray-800">John Doe</h2>
                                <p className="text-sm font-medium text-gray-500">john.doe@example.com</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 mt-6 pt-6">
                            <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Full Name</span>
                                    <span className="w-3/4 text-sm text-gray-800">John Doe</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Email</span>
                                    <span className="w-3/4 text-sm text-gray-800">john.doe@example.com</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="w-1/4 text-sm font-medium text-gray-500">Phone</span>
                                    <span className="w-3/4 text-sm text-gray-800">+1 123-456-7890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 ml-4">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">Completed Coureses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">Enrolled Courses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-800">My Courses</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
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