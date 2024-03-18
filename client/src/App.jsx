import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../routes/Layout/Layout';
import HomePage from '../routes/Homepage/Homepage';
import CustomerRegisterPage from '../routes/CustomerRegisterpage/CustomerRegisterPage';
import RestaurantRegisterPage from '../routes/RestaurantRegisterPage/RestaurantRegisterPage';
import MenuPage from '../routes/Menupage/Menupage';
import CustomerLoginPage from '../routes/CustomerLoginPage/CustomerLoginPage';
import RestaurantLoginPage from '../routes/RestaurantLoginPage/RestaurantLoginPage';
import { AuthContextProvider } from '../context/AuthContext';
import './index.css';
import axios from 'axios';
import AddMenuPage from '../routes/AddMenuPage/AddMenuPage';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

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
        path: '/loginCustomer',
        element: <CustomerLoginPage />,
      },
      {
        path: '/loginRestaurant',
        element: <RestaurantLoginPage />,
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
        path: '/menu/:id',
        element: <MenuPage />,
      },
      {
        path: '/addMenu',
        element: <AddMenuPage />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
