import axios from 'axios';

// const mockApi = axios.create({
//   baseURL: 'https://635ec7b303d2d4d47af5fbcd.mockapi.io/',
// });
const PORT = 3030;

const baseApi = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
  // baseURL: `https://web-production-c6e8.up.railway.app/api/`,
});

export const token = {
  set(token) {
    baseApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    baseApi.defaults.headers.Authorization = ``;
  },
};

export const baseURL = {
  setLocalhost() {
    baseApi.defaults.baseURL = `http://localhost:${PORT}/api/`;
  },
  setRailWay() {
    baseApi.defaults.baseURL = `https://web-production-c6e8.up.railway.app/api/`;
  },
};

export default baseApi;
