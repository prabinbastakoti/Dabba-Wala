import axios from 'axios';

const registerCustomer = async (data) => {
  const response = await axios.post('/auth/registerCustomer', data);
  return response.data;
};

const registerRestaurant = async (data) => {
  const response = await axios.post('/auth/registerRestaurant', data);
  return response.data;
};

const login = async (data) => {
  const response = await axios.post('/auth/login', data);
  return response.data;
};

const logout = async () => {
  const response = await axios.post('/auth/logout', data);
  return response.data;
};

export default {
  registerCustomer,
  registerRestaurant,
  login,
  logout,
};
