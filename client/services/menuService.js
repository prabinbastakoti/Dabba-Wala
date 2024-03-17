import axios from 'axios';

const addMenuItem = async (data) => {
  const response = await axios.post('/menu/addMenuItem', data);
  return response.data;
};

const getMenuItem = async () => {
  const response = await axios.get('/menu/getMenuItem');
  return response.data;
};

const getMenuItemByItem = async () => {
  const response = await axios.get('/menu/getMenuItemByItem');
  return response.data;
};

export default { addMenuItem, getMenuItem, getMenuItemByItem };
