import React from 'react'

const DriverEarning = () => {
  return (
    <div>
      
      {/* Earnings Summary */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-green-500 text-white rounded-lg">💰 Earnings: Rs 75</div>
        <div className="p-4 bg-yellow-500 text-white rounded-lg">🚖 Rides: 5</div>
      </div>

    </div>
  )
}

export default DriverEarning
