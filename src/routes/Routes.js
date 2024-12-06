import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import GuestDashboard from '../components/pages/dashboard/GuestDashboard';
import UserDashboard from '../components/pages/dashboard/UserDashboard';
import AdminDashboard from '../components/pages/dashboard/AdminDashboard';
import SuperAdminDashboard from '../components/pages/dashboard/SuperAdminDashboard';
import Login from '../components/Login';
import Home from '../components/pages/UserDashboard/Home/Home';
import Widgets from '../components/pages/UserDashboard/Widgets/Widgets';

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
          { path : "user-dashboard" , element : <Home /> },
          { path : "widgets" , element : <Widgets />},
        ], },
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "super-admin-dashboard", element: <SuperAdminDashboard /> },
      ],
    },
  ]);
  
  export default router;