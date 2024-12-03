import React from 'react'
import { useAuth } from '../../../providers/AuthContext';
const AdminDashboard = () => {
    const { authData, logout } = useAuth();
    return (
        <div>
            <h1>Welcome, Admin {authData.user}</h1>
            <p>Your role: {authData.role}</p>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={logout}>Logout</button>
        </div>
  )
}

export default AdminDashboard
