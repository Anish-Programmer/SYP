import React from 'react'
import { Link } from 'react-router-dom'
import Jeep from './Jeep'

const Car= () => {
  return (
    <div>
       <div className='flex flex-col items-start justify-between bg-[#0071E3] mt-3 p-25  '>
        <h2 className='text-4xl font-semibold mb-5 text-white'>Car</h2>
        {/* <div className='flex items-center justify-between w-full text-2xl font-semibold text-green-400'>
            <Link to='#'>Car</Link>
            <Link to='#'>Jeep</Link>
            <Link to='#'>Van</Link>
            <Link to='#'>Bus</Link>
        </div> */}

        <div id="carScroll" className='h-[55%] bg-white-700 w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
              <div className='flex-shrink-0 justify-between bg-black text-white h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
              <div className='flex-shrink-0 bg-black text-white  justify-between h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
              <div className='flex-shrink-0  justify-between bg-black text-white h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
              <div className='flex-shrink-0  justify-between bg-black text-white h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
              <div className='flex-shrink-0  justify-between bg-black text-white h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
              <div className='flex-shrink-0  justify-between bg-black text-white h-full w-[300px] rounded-xl p-7 ml-5 mr-5'>
                <div>

                <img className='object-cover rounded-2xl mb-5' src="./src/assets/book_vehicle_1.png" alt="Car image" />
                </div>

                <div>
                <h2>Rate: Rs 10 (per min)</h2>
                <h2>Driver: JohnDrive</h2>
                <button className='ml-7 mt-5 text-center text-xl  bg-[#0071E3] outline-none py-3 px-6 rounded-full text-[#fff]'>🚔Book Now</button>
                </div>
              </div>
           
        </div>

      

       
       
      </div>

       <Jeep />   
    </div>
  )
}

export default Car
