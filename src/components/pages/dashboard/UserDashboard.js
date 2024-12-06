import React from 'react'
import Navbar from '../UserDashboard/Navbar';
import Sidebar from '../UserDashboard/Sidebar';
import { Outlet } from 'react-router-dom';
const UserDashboard = () => {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default UserDashboard
