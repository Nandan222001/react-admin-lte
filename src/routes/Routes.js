import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import GuestDashboard from '../components/pages/dashboard/GuestDashboard';
import UserDashboard from '../components/pages/dashboard/UserDashboard';
import AdminDashboard from '../components/pages/dashboard/AdminDashboard';
import SuperAdminDashboard from '../components/pages/dashboard/SuperAdminDashboard';
import Login from '../components/Login';
import Home from '../components/pages/UserDashboard/Home/Home';
import Products from '../components/pages/UserDashboard/Products/Products';

const router = createBrowserRouter([

    {
      path: "/",
      element: <Login />, 
    },
    {
      path: "/",
      element: <App />, 
      children: [
        { path: "guest-dashboard", element: <GuestDashboard /> },
        { path: "user-dashboard", element: <UserDashboard /> , children : [
          { path : "home" , element : <Home /> },
          { path : "products" , element : <Products />},
        ], },
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "super-admin-dashboard", element: <SuperAdminDashboard /> },
      ],
    },
  ]);
  
  export default router;