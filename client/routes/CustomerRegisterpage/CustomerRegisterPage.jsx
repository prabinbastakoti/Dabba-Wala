import { useState } from 'react';
import './CustomerRegisterPage.css';

const initialValue = {
  name: '',
  email: '',
  number: '',
  delivery: '',
  cusine: '',
  restriction: '',
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
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={(e) => handleChange(e, 'name')}
        />
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange(e, 'email')}
        />
        <label htmlFor="number">Phone Number:</label>
        <input
          id="number"
          name="number"
          type="text"
          value={data.number}
          onChange={(e) => handleChange(e, 'number')}
        />
        <label htmlFor="delivery">Delivery Address:</label>
        <input
          id="delivery"
          name="delivery"
          type="text"
          value={data.delivery}
          onChange={(e) => handleChange(e, 'delivery')}
        />
        <label htmlFor="cuisine">Preferred Cuisine Types:</label>
        <input
          id="cuisine"
          name="cuisine"
          type="text"
          value={data.cusine}
          onChange={(e) => handleChange(e, 'cusine')}
        />
        <label htmlFor="restriction">Dietary Restrictions:</label>
        <input
          id="restriction"
          name="restriction"
          type="text"
          value={data.restriction}
          onChange={(e) => handleChange(e, 'restriction')}
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
        <p>
          Already have an account?<button>Log in</button>
        </p>
      </form>
    </div>
  );
};

export default CustomerRegisterPage;
