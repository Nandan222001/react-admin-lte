import React from 'react'
import Navbar from '../UserDashboard/Navbar';
import Sidebar from '../UserDashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from '../../../providers/ProductContext';

const UserDashboard = () => {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <Sidebar />
        <ProductProvider>
        <Outlet />
        </ProductProvider>
        
      </div>
    </>
  )
}

export default UserDashboard
