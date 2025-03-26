import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://mempool.space/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
