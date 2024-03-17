import { useState } from 'react';
import './RestaurantRegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';

const initialValue = {
  name: '',
  username: '',
  contact: '',
  password: '',
  accountType: 'Restaurant',
};

const RestaurantRegisterPage = () => {
  const [data, setData] = useState(initialValue);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.registerRestaurant(data);
      setData(initialValue);
      setTimeout(() => {
        toast.success('Signup Successful! Login to Continue', {
          position: 'top-right',
          toastId: 'success4',
        });
      }, 1);
      navigate('/loginRestaurant');
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        toast.error('Signup Failed!', {
          position: 'top-right',
          toastId: 'error4',
        });
      }, 1);
    }
  };

  const handleChange = (event, item) => {
    const copy = { ...data };
    copy[item] = event.target.value;
    setData(copy);
  };

  return (
    <div className="restaurantRegisterPage">
      <form onSubmit={signup}>
        <h1>Restaurant Sign Up</h1>
        <label htmlFor="name">Restaurant Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={(e) => {
            handleChange(e, 'name');
          }}
        />

        <label htmlFor="location">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={data.username}
          onChange={(e) => {
            handleChange(e, 'username');
          }}
        />
        <label htmlFor="contact">Contact Information:</label>
        <input
          id="contact"
          name="contact"
          type="text"
          value={data.contact}
          onChange={(e) => {
            handleChange(e, 'contact');
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={(e) => {
            handleChange(e, 'password');
          }}
        />
        <button type="submit" onClick={signup}>
          Sign Up
        </button>

        <Link to={'/customerRegister'}>
          <p className="red">Sign up as a customer</p>
        </Link>

        <p>
          Already have an account?
          <Link to={'/loginRestaurant'}>
            <span className="red"> Log in </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RestaurantRegisterPage;
