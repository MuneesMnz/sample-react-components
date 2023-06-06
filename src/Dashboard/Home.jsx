import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='flex gap-5 bg-gray-200'>
      <Sidebar />
      <div className='max-w-5xl flex-1 mx-auto py-4 h-screen'>
        <Navbar />
        <p className=' font-Montserrat'>Hello world</p>
      </div>
    </div>
  )
}

export default Home
