import { useState, useContext } from 'react';
import './CustomerRegisterPage.css';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const initialValue = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  accountType: 'Customer',
};

const CustomerRegisterPage = () => {
  const [data, setData] = useState(initialValue);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.registerCustomer(data);
      setData(initialValue);
      setTimeout(() => {
        toast.success('Signup Successful! Login to Continue', {
          position: 'top-right',
          toastId: 'success3',
        });
      }, 1);
      navigate('/loginCustomer');
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        toast.error('Signup Failed!', {
          position: 'top-right',
          toastId: 'error3',
        });
      }, 1);
    }
  };

  const handleChange = (event, item) => {
    const copy = { ...data };
    copy[item] = event.target.value;
    setData(copy);
  };

  if (user) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="CustomerRegisterPage">
      <form onSubmit={signup}>
        <h1>Customer Sign Up</h1>
        <label htmlFor="name">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={data.firstName}
          onChange={(e) => handleChange(e, 'firstName')}
        />
        <label htmlFor="name">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={data.lastName}
          onChange={(e) => handleChange(e, 'lastName')}
        />
        <label htmlFor="name">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={data.username}
          onChange={(e) => handleChange(e, 'username')}
        />
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange(e, 'email')}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={(e) => handleChange(e, 'password')}
        />
        <button type="submit" onClick={signup}>
          Sign Up
        </button>
        <Link to={'/restaurantRegister'}>
          <p className="red">Sign up as a restaurant</p>
        </Link>
        <p>
          Already have an account?
          <Link to={'/loginCustomer'}>
            <span className="red"> Log in </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CustomerRegisterPage;
