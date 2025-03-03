import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
        e.preventDefault();
        // printing name
        console.log(email);
        console.log(password)
        // setting to normal form input
        setEmail('');
        setPassword('');
  }
    
  return (
    <div className='flex  items-center justify-center h-screen w-screen bg-[#F1F1F1] text-[#fff]'>
    <div className='border-[#1EB955] bg-[#FFFFFF] border-[2px] px-15 py-10 rounded-3xl text-black'>
        <h2 
            className='font-semibold text-center text-3xl'>Welcome to <br />
            <span className='text-[#0071E3] text-2xl'>OnlineSawari</span>
        </h2>
        <form 
            onSubmit={(e)=>{
                handleSubmit(e);
            }}
            className='flex flex-col items-center justify-center p-5 mt-5'>
         <input value={email}
            onChange={(e)=>{
                 setEmail(e.target.value);
            }}  
            className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-3xl' type="text" placeholder='Username' required/>
            <br />
         <input value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-3xl' type="password" placeholder='Password' required/>
            <br />
            <button 
                className='text-3xl mt-3 bg-[#0071E3] outline-none py-3 px-6 text-white rounded-full'>
                Login
            </button>
            {/* <h2>Register</h2> */}
            {/* <a href="#" className='mt-3 text-[#9147B1]'>Register New account</a> */}
            <Link to='/registerNewUser' className='mt-3 text-[#9147B1]'>Register New User</Link>
        </form>
    </div>
      
    </div>
  )
}

export default Login
