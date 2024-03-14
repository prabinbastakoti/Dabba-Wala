import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <Link to={'/'}>
        <h1>Dabba Wala</h1>
      </Link>
      <div className="authButton">
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
        <Link to={'/register'}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
