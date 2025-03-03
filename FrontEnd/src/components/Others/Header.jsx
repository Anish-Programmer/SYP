import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] text-[#3f2d2d]'>
       <div className='flex items-center justify-between py-5 px-25 '>
          <div><h2 className='text-4xl font-bold text-[#0071E3]'>🚗 Online Sawari</h2></div>
          <div className='flex items-center justify-between gap-12 text-xl '>
            <Link to="/" className=''><i className="ri-home-2-line"></i>Home</Link>
            <Link to="/profile" className=''><i className="ri-user-line"></i>Profile</Link>
            <Link  to="/login" className='block w-fit' ><button className='border-none bg-[#0071E3] px-5 py-3 rounded-full text-white cursor-pointer'>Login</button></Link>
            <button className='border-none bg-red-500 px-5 py-3 rounded-full text-white '>Logout</button>
          </div>
       </div>
    </div>
  )
}

export default Header
