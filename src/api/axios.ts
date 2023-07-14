import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://openexchangerates.org/api/',
});

export default axiosClient;
