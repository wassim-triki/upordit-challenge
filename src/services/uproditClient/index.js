import axios from 'axios';
import config from '../../config';
import generateSignature from '../../helpers/generateSignature';
const uproditClient = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

uproditClient.interceptors.request.use(
  (config) => {
    if (config.url) {
      const token = generateSignature(config.url);
      config.headers = { ...config.headers, Authorization: token };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default uproditClient;
