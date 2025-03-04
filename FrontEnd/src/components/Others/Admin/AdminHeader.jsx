import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
       {/* Navbar */}
       <nav className="flex justify-between bg-white-900 text-black p-9 rounded">
        <h2 className="text-lg font-bold">🚗 Admin Dashboard</h2>
        <div className='flex items-center justify-between gap-10'>
        <Link
            to='/adminManageDriver'
            className='block w-fit'
        >
          <button className="cursor-pointer bg-blue-500 px-4 py-2 rounded">Manage Drivers</button>
        </Link>

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

export default AdminHeader
