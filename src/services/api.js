import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

instance.defaults.withCredentials = true;

export default instance;
