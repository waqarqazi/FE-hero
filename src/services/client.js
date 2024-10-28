import axios from "axios";
import { store } from "../store/store"; // Adjust according to your file structure

const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Response handler
const onSuccess = function (response) {
  return response.data; // Return the data from the response
};

// Error handler
const onError = function (error) {
  if (error.response) {
    // Handle server response errors
  }
  return Promise.reject({
    errMsg: !error?.response ? "Network Issue!" : error.response.data,
    status: error?.response?.status || "not status",
  });
};

// Add interceptors for response handling
client.interceptors.response.use(onSuccess, onError);

// Add interceptors for request handling
client.interceptors.request.use(
  async (config) => {
    const state = store.getState(); // Get the Redux state
    const token = state.auth.userToken; // Retrieve the token from the state
    if (token) {
      config.headers["x-auth-token"] = `${token}`; // Add the token to headers
    }
    return config; // Return the updated config
  },
  (error) => Promise.reject(error)
);

export default client;
