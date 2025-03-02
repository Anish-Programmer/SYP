import React from 'react'
import Login from './components/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import RegisterNewAccount from './components/Auth/RegisterNewUser'
import RegisterNewUser from './components/Auth/RegisterNewUser'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/login' element={<Login />}>Login Page</Route>
        <Route path='/registerNewUser' element={<RegisterNewUser />}>Register New User page</Route>
      </Routes>
    </div>
  )
}

export default App
