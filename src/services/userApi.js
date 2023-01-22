import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// export const token = {
//   set(token) {
//     marketApi.defaults.headers.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     marketApi.defaults.headers.Authorization = ``;
//   },
// };

export default marketApi;
