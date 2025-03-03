import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Others/Header'
import Greeting from '../Others/Greeting'
import CTA from '../Others/CTA'

const CustomerDashboard = () => {
  return (
    <div className='h-screen' >
      <Header  />
      <Greeting />
      <CTA />

      <div className='bg-red-700 h-[100%] mt-25'>
            Arrive
      </div>
      
    </div>
  )
}

export default CustomerDashboard
