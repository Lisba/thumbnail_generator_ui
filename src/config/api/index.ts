import axios from 'axios';
import { TIMEOUT_LIMIT } from './constants';

const axiosConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: TIMEOUT_LIMIT,
};

const apiClient = axios.create(axiosConfig);

export default apiClient;
