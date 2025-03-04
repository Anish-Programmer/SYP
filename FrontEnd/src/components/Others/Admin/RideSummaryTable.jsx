import React from 'react'

const RideSummaryTable = () => {
  return (
    <div>
       {/* Recent Rides Table */}
       <div className="mt-12">
        <h3 className="text-xl font-semibold mb-2">📝 Recent Rides</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">#</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Fare</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2">1</td>
              <td className="p-2">John Doe</td>
              <td className="p-2 text-green-500">Completed</td>
              <td className="p-2">Rs15</td>
              <td className="p-2">03/03/25</td>
            </tr>
            <tr className="text-center">
              <td className="p-2">2</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2 text-yellow-500">Ongoing</td>
              <td className="p-2">Rs12</td>
              <td className="p-2">03/03/25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RideSummaryTable
