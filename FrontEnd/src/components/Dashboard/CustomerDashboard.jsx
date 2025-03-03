import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Others/Header'
import Greeting from '../Others/Greeting'
import CTA from '../Others/CTA'
import RiderStatus from '../Others/RiderStatus'
import PickUpLocation from '../Others/PickUpLocation'
import SelectVehicle from '../Others/Car'
import Car from '../Others/Car'

const CustomerDashboard = () => {
  return (
    <div className='h-screen ' >
      <Header  />
      <Greeting />
      <RiderStatus />
      <PickUpLocation />
      <Car />

     
    </div>
  )
}

export default CustomerDashboard
