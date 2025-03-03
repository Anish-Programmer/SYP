import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const RegisterNewUser = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userName, setUserName] = useState('')
  const [DOB, setDOB] = useState('')
  const [gender, setGender] = useState('')

  const handleSubmit = (e)=>{
        e.preventDefault();
        // printing name
        console.log(email);
        console.log(password)
        console.log(userName)
        console.log(DOB);
        console.log(gender)
        // setting to normal form input

        setEmail('');
        setPassword('');
  }

  const handleGenderChange = (e)=>{
     setGender(e.target.value);
  }
    
  return (
    <div className='flex  items-center justify-center h-screen w-screen bg-black text-white'>
    <div className='border-[#1EB955] border-[2px] px-10 py-2 rounded-3xl bg-transparent'>
        <h2 
            className='font-semibold text-center text-3xl'>Registration<br />
            <span className='text-[#0071E3] text-2xl text-center'>Form</span>
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
            className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-2xl' type="email" placeholder='Email Address' required/>
            <br />      
         <input value={userName}
            onChange={(e)=>{
                 setUserName(e.target.value);
            }}  
            className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-2xl' type="text" placeholder='Full Name' required/>
            <br />
         <input value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            className='bg-white text-black px-5 py-4 border-2 rounded-full placeholder:text-gray-500 outline-none text-2xl' type="password" placeholder='Password' required/>
            <br />
            <div className='flex items-center justify-between w-full'>
                <label>Date of Birth: </label>
                <input value={DOB}
                onChange={(e)=>{
                    setDOB(e.target.value);
                }}
                className='bg-white  px-5 py-4 border-2 rounded-full text-gray-500 outline-none text-2xl' type="date" placeholder='' required/>
                
            </div>
        
            <br />
            <div className='flex  items-center justify-between w-full'>
                <label >Male
                <input value="male"
                onChange={(e)=>{
                    handleGenderChange(e);
                }}  
                className='ml-5 bg-white  px-5 py-4 border-2 rounded-full text-gray-500 outline-none text-2xl' type="radio" name='gender'/>
                </label>


                <label >Female
                <input value="Female"
                onChange={(e)=>{
                    handleGenderChange(e);
                }}  
                className='ml-5 bg-white  px-5 py-4 border-2 rounded-full text-gray-500 outline-none text-2xl' type="radio" placeholder='' name='gender' />
                </label>
            </div>

            <button 
                className='text-3xl mt-3 bg-[#0071E3] outline-none py-3 px-6 rounded-full'>
                Register
            </button>
            <Link to='/login' className='mt-3 text-[#9147B1]'>Login</Link>
        </form>
    </div>
      
    </div>
  )
}

export default RegisterNewUser
