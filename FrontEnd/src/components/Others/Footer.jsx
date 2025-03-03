import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className='bg-[#f1f1f1] mt-3 py-55 px-25 border-none rounded'>
         <div className=' flex items-center justify-between p-5'>
            <h2>🚗 <span className='text-3xl font-semibold text-[#0071E3]'>Online Sawari</span></h2>
            <label className='text-2xl font-medium'>Languagee: 
              <select name="language" id="" className='ml-5 bg-white text-black px-7 py-2 border-2 rounded-full placeholder:text-gray-500 outline-none text-xl'>
                  <option value="English">English</option>
                  <option value="Nepali">Nepali</option>
              </select>
            </label>
            <h2 className='text-2xl font-medium'><i class="ri-phone-fill"></i> 24/7 Support</h2>
          </div>

          <div className='  flex items-center justify-between p-5 mt-7 text-[#E24B95] text-2xl font-medium'>
            <h2>Home</h2>
            <h2>Ride history</h2>
            <h2>Payments</h2>
            <h2>Help Center</h2>
          </div>


          <div className=' p-5'>
            <div className='flex items-center justify-between mb-5'>
              <h2><i class="ri-mail-fill"></i> support@onlinesawari.com</h2>
              <h2><i class="ri-phone-fill"></i>+9777202003</h2>
            </div>

            <div className='flex items-center justify-between'>
              <h2><i class="ri-file-list-3-fill"></i> Privacy Policy</h2>
              <h2><i class="ri-file-list-3-fill"></i> Terms & Conditions</h2>
            </div>
          </div>

          <div className=' p-5 flex items-center justify-center mt-15'>
          <p> <i class="ri-copyright-fill"></i> <span>Online Sawari</span>. All rights reserved.</p>
          </div>

      </div>
     
    </div>
  )
}

export default Footer
