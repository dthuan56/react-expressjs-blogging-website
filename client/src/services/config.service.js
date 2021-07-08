import axios from 'axios';

export const setAuthToken = (token) => {
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

const client =  axios.create({
  baseURL: 'http://localhost:3001',
});

export default client;

