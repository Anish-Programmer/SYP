import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Pages/Driver/Navbar'
import DriverActiveDrive from '../Pages/Driver/DriverActiveDrive'
import DriverIncommingRequest from '../Pages/Driver/DriverIncommingRequest'
import DriverEarning from '../Pages/Driver/DriverEarning'
import DriverRideHistory from '../Pages/Driver/DriverRideHistory'
import Greeting from '../Others/Greeting'

const DriverDashboard = () => {
  return (
    <div>
      <div className="p-6">
      <Navbar />
      <Greeting user={"Driver"} message={"Ready for the next ride?"} />
      <DriverActiveDrive />
      <DriverIncommingRequest />
     <DriverEarning />
      <DriverRideHistory />
      </div>
    </div>
  )
}

export default DriverDashboard
