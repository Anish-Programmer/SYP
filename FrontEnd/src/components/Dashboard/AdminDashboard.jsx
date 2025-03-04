import React from 'react'
import AdminHeader from '../Others/Admin/AdminHeader'
import AdminAppSummary from '../Others/Admin/AdminAppSummary'
import RideSummaryTable from '../Others/Admin/RideSummaryTable'
import ManageDriver from '../Others/Admin/ManageDriver'
import Greeting from '../Others/Greeting'


const AdminDashboard = () => {
  return (
      <div className="p-6">

      <AdminHeader />
      <Greeting user={"Admin"} message={"Check the latest update?"}/>
      <AdminAppSummary />
      <RideSummaryTable />
  
    </div>
  
  )
}

export default AdminDashboard
