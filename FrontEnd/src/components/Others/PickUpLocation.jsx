import React from 'react'

const PickUpLocation = () => {
  return (
    <div>
      <div className='bg-black text-white p-35  '>
        <form className='flex flex-col items-center justify-between gap-5' >
          <div className='flex items-center justify-between text-3xl gap-25'>
          <label><input className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-3xl' type="text" placeholder='Enter your pickup location' /></label>
          <label> <input className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-3xl' type="text" placeholder='Enter your drop-off location' /></label>
          </div>
          <button className='text-4xl mt-10 bg-[#0071E3] outline-none py-5 px-12 rounded-full'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PickUpLocation
