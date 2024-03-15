import './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
