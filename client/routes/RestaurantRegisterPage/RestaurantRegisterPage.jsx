import { useState } from 'react';
import './RestaurantRegisterPage.css';
import { Link } from 'react-router-dom';

const initialValue = {
  name: '',
  location: '',
  contact: '',
  cuisine: '',
  menu: '',
  time: '',
  Delivery: '',
  order: '',
  password: '',
};

const RestaurantRegisterPage = () => {
  const [data, setData] = useState(initialValue);

  const signup = (e) => {
    e.preventDefault();
    console.log(data);
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
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          type="text"
          value={data.location}
          onChange={(e) => {
            handleChange(e, 'location');
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
        <label htmlFor="cuisine">Cuisine Offered:</label>
        <input
          id="cuisine"
          name="cuisine"
          type="text"
          value={data.cuisine}
          onChange={(e) => {
            handleChange(e, 'cuisine');
          }}
        />
        <label htmlFor="menu">Sample Menu:</label>
        <input
          id="menu"
          name="menu"
          type="text"
          value={data.menu}
          onChange={(e) => {
            handleChange(e, 'menu');
          }}
        />
        <label htmlFor="hours">Opening Hours:</label>
        <input
          id="hours"
          name="hours"
          type="text"
          value={data.time}
          onChange={(e) => {
            handleChange(e, 'time');
          }}
        />
        <label htmlFor="delivery">Delivery Areas:</label>
        <input
          id="delivery"
          name="delivery"
          type="text"
          value={data.Delivery}
          onChange={(e) => {
            handleChange(e, 'Delivery');
          }}
        />
        <label htmlFor="order">Minimum Order Requirements:</label>
        <input
          id="order"
          name="order"
          type="text"
          value={data.order}
          onChange={(e) => {
            handleChange(e, 'order');
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
          <Link to={'/login'}>
            <span className="red"> Log in </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RestaurantRegisterPage;
