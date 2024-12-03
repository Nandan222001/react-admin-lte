import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import GuestDashboard from '../components/pages/dashboard/GuestDashboard';
import UserDashboard from './UserDashboard';
import AdminDashboard from '../components/pages/dashboard/AdminDashboard';
import SuperAdminDashboard from '../components/pages/dashboard/SuperAdminDashboard';
import Login from '../components/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Login route at the root
    },
    {
      path: "/",
      element: <App />, // This will wrap the dashboard routes and handle authentication
      children: [
        { path: "guest-dashboard", element: <GuestDashboard /> },
        { path: "user-dashboard", element: <UserDashboard /> },
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "super-admin-dashboard", element: <SuperAdminDashboard /> },
      ],
    },
  ]);
  
  export default router;