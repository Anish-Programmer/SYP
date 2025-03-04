import React from 'react'

const AdminAppSummary = () => {
  return (
    <div className=''>
       {/* Stats Summary */}
       <div className="grid grid-cols-2 gap-4 text-center mt-18 ">
        <div className="p-4 bg-blue-500 text-white rounded-lg">📊 Total Rides: 1200</div>
        <div className="p-4 bg-green-500 text-white rounded-lg">🚖 Active Drivers: 340</div>
        <div className="p-4 bg-yellow-500 text-white rounded-lg">👤 Users: 5,400</div>
        <div className="p-4 bg-purple-500 text-white rounded-lg">💰 Revenue: Rs150K</div>
      </div>
    </div>
  )
}

export default AdminAppSummary
