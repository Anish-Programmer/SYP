import React from 'react'

const DriverRideHistory = () => {
  return (
    <div>
      
      {/* Ride History */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">📜 Recent Ride History</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">#</th>
              <th className="p-2">Passenger</th>
              <th className="p-2">Status</th>
              <th className="p-2">Fare</th>
              <th className="p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2">1</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2 text-green-500">Completed</td>
              <td className="p-2">$15</td>
              <td className="p-2">⭐⭐⭐⭐☆</td>
            </tr>
            <tr className="text-center">
              <td className="p-2">2</td>
              <td className="p-2">Alex J.</td>
              <td className="p-2 text-red-500">Canceled</td>
              <td className="p-2">$0</td>
              <td className="p-2">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DriverRideHistory
