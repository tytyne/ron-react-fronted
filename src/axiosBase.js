import axios from "axios";

const url = process.env.APP_URL;
const token = localStorage.getItem("token");

const axiosBase = axios.create({
  baseURL: url,
  headers: {
    "ACCESS_TOKEN_SECRET'": token,
    "Content-Type": "application/json",
  },
});

export default axiosBase;