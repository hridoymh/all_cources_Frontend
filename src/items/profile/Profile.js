import React from 'react'
import CourseCard from '../CourseCard'
const Profile = () => {
  return (
    <main class="py-10 w-full">
            <div class="container mx-auto px-4 flex">
                <div class="w-1/3">
                    <div class="bg-white shadow rounded-lg p-6">
                        <div class="flex items-center mb-6">
                            <div class="flex-shrink-0">
                                <img class="h-12 w-12 rounded-full" src="https://picsum.photos/200" alt="Avatar"/>
                            </div>
                            <div class="ml-4">
                                <h2 class="text-lg font-medium text-gray-800">John Doe</h2>
                                <p class="text-sm font-medium text-gray-500">john.doe@example.com</p>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 mt-6 pt-6">
                            <h3 class="text-lg font-medium text-gray-800">Personal Information</h3>
                            <div class="mt-4">
                                <div class="flex items-center">
                                    <span class="w-1/4 text-sm font-medium text-gray-500">Full Name</span>
                                    <span class="w-3/4 text-sm text-gray-800">John Doe</span>
                                </div>
                                <div class="flex items-center mt-2">
                                    <span class="w-1/4 text-sm font-medium text-gray-500">Email</span>
                                    <span class="w-3/4 text-sm text-gray-800">john.doe@example.com</span>
                                </div>
                                <div class="flex items-center mt-2">
                                    <span class="w-1/4 text-sm font-medium text-gray-500">Phone</span>
                                    <span class="w-3/4 text-sm text-gray-800">+1 123-456-7890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/3 ml-4">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-lg font-medium text-gray-800">Completed Coureses</h3>
                        <div class="mt-4 grid grid-cols-3 gap-4">
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                            <CourseCard img="https://picsum.photos/300/200" />
                        </div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-lg font-medium text-gray-800">Enrolled Courses</h3>
                        <div class="mt-4 grid grid-cols-3 gap-4">
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

export default Profile