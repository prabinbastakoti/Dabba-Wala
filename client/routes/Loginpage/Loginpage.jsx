import './Loginpage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const login = (event) => {
    event.preventDefault();
  };
  return (
    <div className="loginpage">
      <form onSubmit={login}>
        <h1>Login</h1>
        <div className="inputElement">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            type="email"
            placeholder="Please Enter Your Username"
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
            placeholder="Please Enter Your Password"
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
          <Link to={'/register'}>
            <span className="span1">Signup as a customer</span>
          </Link>
          <Link to={'/register'}>
            <span className="span2">Signup your Restaurant</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Loginpage;
