import React from 'react'
import { Link } from 'react-router-dom'

const ManageDriver = () => {
  return (
    <div>
      <div className="p-6">
      {/* Navbar */}
      <nav className="flex justify-between bg-white-900 text-black p-4">
       <Link
        to='/adminDashboard'
        className='block w-fit'
       >
      <h2 className="text-lg font-bold cursor-pointer">🚗 Admin Dashboard</h2>
       </Link> 
      <div className='flex items-center justify-between gap-10'>
        <button className="bg-green-500 px-4 py-2 rounded">+ Add New Driver</button>
        <button className="bg-red-500 px-4 py-2 rounded">- Remove  Driver</button>
      </div>
      
      </nav>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="p-4 bg-blue-500 text-white rounded-lg">📊 Total: 500</div>
        <div className="p-4 bg-green-500 text-white rounded-lg">🟢 Active: 340</div>
        <div className="p-4 bg-red-500 text-white rounded-lg">🔴 Inactive: 160</div>
      </div>

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="🔍 Search Driver..."
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Drivers Table */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">📝 Drivers List</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Vehicle</th>
              <th className="p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2">1</td>
              <td className="p-2">John Doe</td>
              <td className="p-2 text-green-500">🟢 Active</td>
              <td className="p-2">Toyota</td>
              <td className="p-2">⭐ 4.8</td>
            </tr>
            <tr className="text-center">
              <td className="p-2">2</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2 text-red-500">🔴 Inactive</td>
              <td className="p-2">Honda</td>
              <td className="p-2">⭐ 4.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ManageDriver
