import axios from 'axios';

const getAllRestaurant = async () => {
  const response = await axios.get('/restaurant/getAllRestaurant');
  return response.data;
};

export default { getAllRestaurant };
