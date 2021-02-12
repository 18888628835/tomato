import axios from "axios";
const appID = "23428m5P3TFxUWgDpjgfAkNo";
const appSecret = "7sSqdQDvUrGrBTBi7FDCeevi";

const ajax = axios.create({
  baseURL: "https://gp-server.hunger-valley.com/",
  headers: {
    "t-app-id": appID,
    "t-app-secret": appSecret,
  },
});

// Add a request interceptor
ajax.interceptors.request.use(
  function (config) {
    const xToken = localStorage.getItem("x-token");
    if (xToken) {
      config.headers["Authorization"] = `Bearer ${xToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
ajax.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.headers["x-token"]) {
      localStorage.setItem("x-token", response.headers["x-token"]);
    }
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default ajax;
