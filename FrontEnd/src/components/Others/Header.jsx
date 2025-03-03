import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#1F1E1E] text-[#fff] '>
       <div className='flex items-center justify-between py-10 px-25'>
          <div><h2 className='text-4xl font-bold text-[#0071E3]'>🚗 Online Sawari</h2></div>
          <div className='flex items-center justify-between gap-15 text-xl'>
            <Link to="/" className=''><i className="ri-home-2-line"></i>Home</Link>
            <Link to="/profile" className=''><i className="ri-user-line"></i>Profile</Link>
            <button className='border-none bg-red-500 px-5 py-3 rounded-full '>Logout</button>
          </div>
       </div>
    </div>
  )
}

export default Header
