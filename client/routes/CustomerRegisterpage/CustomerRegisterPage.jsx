import { useState } from 'react';
import './CustomerRegisterPage.css';
import { Link } from 'react-router-dom';

const initialValue = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
};

const CustomerRegisterPage = () => {
  const [data, setData] = useState(initialValue);

  const signup = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialValue);
  };

  const handleChange = (event, item) => {
    const copy = { ...data };
    copy[item] = event.target.value;
    setData(copy);
  };

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
        <label htmlFor="name">Second Name:</label>
        <input
          id="secondName"
          name="secondName"
          type="text"
          value={data.secondName}
          onChange={(e) => handleChange(e, 'secondName')}
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
          <Link to={'/login'}>
            <span className="red"> Log in </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CustomerRegisterPage;
