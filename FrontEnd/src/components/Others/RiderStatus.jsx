import React from 'react'

const RiderStatus = () => {
  return (
    <div>
      <div className='bg-[#0071E3] border-[1px] border-black  mt-7 mb-3 text-white flex flex-col gap-7 items-start justify-between p-35'>
            <div className=''>
            <h3 className='text-4xl font-semibold'>🟢Active Ride: Arriving in 5 min (car) </h3>
            </div>
            <div className='flex items-center justify-between gap-10 text-2xl px-12'>
              <h4>Driver: Alex</h4>
              <h4><i className="ri-star-line text-yellow-300" ></i>Rating: 4.9</h4>
              <h4 className='text-black font-bold'><i class="ri-phone-line"></i>Contact Driver</h4>
            </div>
      </div>
    </div>
  )
}

export default RiderStatus
