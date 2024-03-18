import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    window.localStorage.clear();
    setTimeout(() => {
      toast.success('logout Successful!', {
        position: 'top-right',
        toastId: 'success5',
      });
    }, 1);
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>Dabba Wala</h1>
      </Link>
      {!user ? (
        <div className="authButton">
          <Link to={'/loginCustomer'}>
            <button className="primaryButton">LOGIN</button>
          </Link>
          <Link to={'/customerRegister'}>
            <button className="primaryButton">SIGNUP</button>
          </Link>
        </div>
      ) : (
        <button className="primaryButton" onClick={logout}>
          LOGOUT
        </button>
      )}
    </div>
  );
};

export default Navbar;
