import React from 'react'
import CTA from './CTA'

const Greeting = (props) => {


  // const [user, setUser] = useState('');



  return (
    //   <div className='bg-[#fff] h-[40%] relative'>
    //       <h2 className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold text-black '>Hi, <br /> <span className='text-[#0071E3]'>customer</span> <br /> <span className='text-2xl'>Ready for you next ride?</span></h2>
    //     </div> 
    <>
      <div className= 'bg-[#F5F5F7] h-[535px] flex text-center justify-center py-35 '>
          <h2 className='text-9xl font-semibold text-black  text-start '>Hi, <br /> <span className='text-[#0071E3]'>{props.user}</span> <br /> <span className='text-2xl'>{props.message}</span></h2>
        </div>   

      
    </>
      
  )
}

export default Greeting
