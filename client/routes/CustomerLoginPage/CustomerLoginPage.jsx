import './CustomerLoginPage.css';
import { useState, useContext } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const initialValue = {
  username: '',
  password: '',
  accountType: 'Customer',
};

const CustomerLoginPage = () => {
  const [data, setData] = useState(initialValue);
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.login(data);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.result[0],
      });
      window.localStorage.clear();
      window.localStorage.setItem(
        'USERDATA',
        JSON.stringify(response.result[0])
      );
      setData(initialValue);
      setTimeout(() => {
        toast.success('Login Successful!', {
          position: 'top-right',
          toastId: 'success1',
        });
      }, 1);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Login Failed!', {
        position: 'top-right',
        toastId: 'error1',
      });
    }
  };

  if (user) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="loginpage">
      <form onSubmit={login}>
        <div className="top">
          <div>Customer</div>
          <div> | </div>
          <Link to={'/loginRestaurant'}>
            <span className="span2">Restaurant</span>
          </Link>
        </div>
        <h1>Login For Customer</h1>
        <div className="inputElement">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            type="email"
            value={data.username}
            onChange={(event) => {
              setData({ ...data, username: event.target.value });
            }}
          />
        </div>
        <div className="inputElement">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />
        </div>
        <button className="loginButton" onClick={login}>
          Login
        </button>
        <div className="last">
          Don't have an account?{' '}
          <Link to={'/customerRegister'}>
            <span className="span1">Signup as a customer</span>
          </Link>
          <Link to={'/restaurantRegister'}>
            <span className="span2">Signup your Restaurant</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default CustomerLoginPage;
