import axios from "axios";

/* const API_BASE_URL = "https://www.themealdb.com"; */
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
