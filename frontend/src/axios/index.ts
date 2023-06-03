import defaltAxios from "axios";
const BASE_URL = "https://backend-3ydm.onrender.com";
const axios = defaltAxios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response.data;
  }
);

export default axios;
