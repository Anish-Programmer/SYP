import React from 'react'

const DriverActiveDrive = () => {
  return (
    <div className='mt-43'>
       {/* Active Ride Card */}
       <div className="mt-6 p-4 bg-blue-500 text-white rounded-lg">
        <h3 className="text-lg font-bold"> Current Ride</h3>
        <p>Pickup: Hotel | Drop-off: Airport</p>
        <p>Arrival Time: 5min | Fare: Rs 20</p>
        <div className="mt-2">
          <button className="bg-green-500 p-2 rounded-lg">Start Ride</button>
          <button className="bg-red-500 p-2 rounded-lg ml-2">Cancel Ride</button>
        </div>
      </div>

    </div>
  )
}

export default DriverActiveDrive
