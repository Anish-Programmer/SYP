import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       {/* Navbar */}
       <nav className="flex justify-between bg-white-900 text-black p-7 rounded">
        <h2 className="text-lg font-bold">🚖 Driver Dashboard</h2>
        <div>
          <Link
            to='/login'
            className='block w-fit'
          >
          <button className="px-4 py-2 rounded bg-red-500 cursor-pointer">Logout</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
