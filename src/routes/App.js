import '../App.css';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext'; 

function App() {
  const { authData } = useAuth();
  const data = localStorage.getItem('accessToken');
  if (!authData  && !data) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {
        data ? <Outlet /> : <h1>Invalid Login</h1>
      }
    </>
  );
}

export default App;
