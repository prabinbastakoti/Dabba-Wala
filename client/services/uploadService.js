import axios from 'axios';

const upload = async (data) => {
  const response = await axios.post('/upload', data, {
    headers: { 'Content-type': 'multipart/form-data' },
  });
  return response.data;
};

export default { upload };
