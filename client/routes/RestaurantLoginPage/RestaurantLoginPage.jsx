import './RestaurantLoginPage.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';

const initialValue = {
  username: '',
  password: '',
  accountType: 'Restaurant',
};

const RestaurantLoginPage = () => {
  const [data, setData] = useState(initialValue);

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      await AuthService.login(data);
      setData(initialValue);
      setTimeout(() => {
        toast.success('Login Successful!', {
          position: 'top-right',
          toastId: 'success2',
        });
      }, 1);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Login Failed!', {
        position: 'top-right',
        toastId: 'error2',
      });
    }
  };
  return (
    <div className="loginpage">
      <form onSubmit={login}>
        <div className="top">
          <Link to={'/loginCustomer'}>
            <span className="span2">Customer</span>
          </Link>
          <div> | </div>
          <div>Restaurant</div>
        </div>
        <h1>Login For Restaurant</h1>
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
export default RestaurantLoginPage;
