import React from 'react'

const Booking = () => {
  return (
    <div className='flex  items-center justify-center h-screen w-screen bg-[#1F1E1E] text-[#fff]'>
        <div className='border-[#1EB955] border-[2px] px-15 py-10 rounded-3xl bg-transparent'>
        <h2 
            className='font-semibold text-center text-3xl'>Welcome to <br />
            <span className='text-[#0071E3] text-2xl'>Booking Form</span>
        </h2> 
        <form className='mt-5'>
            <div className='flex items-center justify-between gap-5'>
                <lable><input 
                       className='bg-white text-black px-2 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl' type="text" placeholder='pickup location' 
                       required/></lable>
                <lable><input 
                    className='bg-white text-black px-3 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl' type="text" placeholder='drop-off location' 
                 required /></lable>
            </div>

            <div className='mt-2'>
                
                <div className='flex items-start justify-between'> 
                    <h2>Select Vehicle:</h2>
                    <label >Car <input type="radio" name="vehicle" required/></label>
                    <label >Jeep <input type="radio" name="vehicle" required/></label>
                    <label >Van <input type="radio" name="vehicle" required/></label>
                    <label >Bus<input type="radio" name="vehicle" required/></label>
                </div>
            </div>

            <div className='flex items-center justify-between mt-2'>
                <label >Schedule Date: </label>
                <label >Now <input type="radio" name='scheduleDate' required/></label>
                <label >Later <input type="radio" name='scheduleDate' required/></label>
            </div>


            <div className='mt-2'>
                <label >Select Date: <input type="date" className='bg-white text-black px-3 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl' required /></label>
                <br />
                <label >Select Time: <input type="time" className='mt-2 bg-white text-black px-7 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl' required/></label>
            </div>

            

            <div className='mt-2'>
                <label  >Payment method
                <select name="" id="payment" className='mt-2 ml-5 bg-white text-black px-7 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl' required>
                    <option value="Khalti">Khalti</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
                </select>
                </label>
            </div>

            <div>
                <button className='w-full bg-[#0071E3] hover:bg-blue-700 rounded py-3 mt-7 outline-none text-xl font-semibold'>Confirm Ride</button>
            </div>
      </form>

        </div>
      

        </div>
     
    
  )
}

export default Booking
