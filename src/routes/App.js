import '../App.css';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext'; 

function App() {
  const { authData } = useAuth();

  if (!authData) {
    return <Navigate to="/" />;
  }
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
