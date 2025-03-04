import React from 'react'
import Login from './components/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import RegisterNewAccount from './components/Auth/RegisterNewUser'
import RegisterNewUser from './components/Auth/RegisterNewUser'
import CustomerDashboard from './components/Dashboard/CustomerDashboard'
import Booking from './components/Pages/Booking'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import ManageDriver from './components/Others/Admin/ManageDriver'
import DriverDashboard from './components/Dashboard/DriverDashboard'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      
      {/* login and register new user page */}
      <Routes>
        <Route path='/' element={<CustomerDashboard />}>Home Page</Route>
        <Route path='/customerDashboard' element={<CustomerDashboard />}>Customer Dashboard</Route>
        <Route path='/login' element={<Login />}>Login Page</Route>
        <Route path='/registerNewUser' element={<RegisterNewUser />}>Register New User page</Route>
        <Route path='/book' element={<Booking />}>Booking Page</Route>
        <Route path='/adminDashboard' element={<AdminDashboard />}>Admin Dashboard</Route>
        <Route path='/adminManageDriver' element={<ManageDriver />}>Manage Driver</Route>
        <Route path='/driverDashboard' element={<DriverDashboard />}>Driver Dashboard</Route>
      </Routes>

       {/* login and register new user page */}

       {/* <CustomerDashboard /> */}

        {/* <Booking /> */}
       
       {/* <AdminDashboard /> */}
       

       {/* <ManageDriver /> */}


    </div>
  )
}

export default App
