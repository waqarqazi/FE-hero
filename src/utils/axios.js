import axios from "axios";
import { BASE_URL } from "constants/api";
import { store } from "store/store";

//axios.defaults.baseURL = `${BASE_URL}/api`;
axios.defaults.baseURL = `${BASE_URL}/api`;

axios.interceptors.request.use(
  (successfulReq) => {
    console.log("successfulReq", successfulReq);
    const token = store.getState().appState?.authState;
    if (token) {
      console.log("tokenC", token);
      successfulReq.headers["x-auth-token"] = token;
    }
    return successfulReq;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axios;
