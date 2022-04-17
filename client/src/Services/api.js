import axios from "axios";

let config = {
  baseURL: "http://localhost:3030/api/",
  timeout: 20000,
  headers: {},
};

const api = () => {
  const token = localStorage.getItem("token");
  if (token) {
    config["headers"] = {
      "auth-token": token,
      ...config.headers,
    };
  }
  return axios.create(config);
};

export default api;
