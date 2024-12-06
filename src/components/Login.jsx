import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../providers/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../services/auth/LoginUser';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const expiry = localStorage.getItem('expiryTime');
    
    if (token && expiry && new Date().getTime() > parseInt(expiry)) {
      localStorage.clear();
    } else if (token) {
      const role = localStorage.getItem('role');
      switch (role) {
        case 'guest':
          navigate('/guest-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'super_admin':
          navigate('/super-admin-dashboard');
          break;
        default:
          navigate('/');
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await LoginUser(username, password);
      const expiryTime = new Date().getTime() + 30 * 60 * 1000; 

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('role', data.role);
      localStorage.setItem('expiryTime', expiryTime);

      login({
        user: username,
        role: data.role,
        accessToken: data.accessToken,
      });

      setTimeout(() => {
        localStorage.clear();
        alert('Session expired. Please log in again.');
        navigate('/');
      }, 30 * 60 * 1000);

      switch (data.role) {
        case 'guest':
          navigate('/guest-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'super_admin':
          navigate('/super-admin-dashboard');
          break;
        default:
          setError('Role not recognized');
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <p>
            <b>React</b>-Login
          </p>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={username}
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text"></div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text"></div>
                </div>
              </div>
              {error && <div className="alert alert-warning">{error}</div>}
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-block"
                  >
                    {loading ? 'Loading...' : 'Sign In'}
                  </button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="assdf#" className="btn btn-block btn-primary">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Sign in using Facebook
              </a>
              <a href="assdf#" className="btn btn-block btn-danger">
                <FontAwesomeIcon icon={faGooglePlus} className="mr-2" /> Sign in using Google+
              </a>
            </div>
            <p className="mb-1">
              <a href="assdfforgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
