import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>Dabba Wala</h1>
      </Link>
      <div className="authButton">
        <Link to={'/login'}>
          <button className="primaryButton">LOGIN</button>
        </Link>
        <Link to={'/customerRegister'}>
          <button className="primaryButton">SIGNUP</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
