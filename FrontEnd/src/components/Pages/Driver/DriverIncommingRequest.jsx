import React from 'react'

const DriverIncommingRequest = () => {
  return (
    <div>
      {/* Incoming Ride Requests */}
      <div className="mt-6 p-4 bg-gray-200 rounded-lg">
        <h3 className="text-lg font-bold">🛎️ Incoming Ride Request</h3>
        <p>Passenger: Ram | Pickup: Airport | Fare: Rs 18</p>
        <br />
        <button className="bg-green-500 py-2 px-5 rounded-lg">Accept</button>
        <button className="bg-red-500 py-2 px-5 rounded-lg ml-2">Reject</button>
      </div>
    </div>
  )
}

export default DriverIncommingRequest
