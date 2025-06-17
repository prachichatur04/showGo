import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to="/">
      <img src={assets.showGo} alt="Movie Icon" className='w-6 h-6' />
      <h1 className='text-2xl font-bold text-white tracking-wide'>ShowGo</h1>
      </Link>
    </div>
  )
}

export default AdminNavbar
