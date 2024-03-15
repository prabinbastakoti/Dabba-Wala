import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../routes/Layout/Layout';
import HomePage from '../routes/Homepage/Homepage';
import LoginPage from '../routes/Loginpage/Loginpage';
import CustomerRegisterPage from '../routes/CustomerRegisterpage/CustomerRegisterPage';
import RestaurantRegisterPage from '../routes/RestaurantRegisterPage/RestaurantRegisterPage';
import MenuPage from '../routes/Menupage/Menupage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/customerRegister',
        element: <CustomerRegisterPage />,
      },
      {
        path: '/restaurantRegister',
        element: <RestaurantRegisterPage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
