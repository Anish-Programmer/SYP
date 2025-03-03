import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div>
        <div className='flex bg-[#F5F5F7] items-center justify-center gap-15 p-10'>
        <Link 
          to = '/book'
          className='block w-fit'
        >
          <button className='text-3xl mt-3 bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff] cursor-pointer'>🚔Book Now</button>
        </Link>
  
        <h2 className='text-xl text-[#E24B95] font-semibold' ><i class="ri-calendar-2-line"></i>Upcoming Ride</h2>
        <h2 className='text-xl text-[#E24B95] font-semibold'>❓Help</h2>
      </div>
    </div>
  )
}

export default CTA
