import './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className="layout">
      <ToastContainer />
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
