import axios from "axios";

const token = localStorage.getItem("ACCESS_TOKEN_SECRET");
console.log(token);
const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
  baseURL,
  headers: {
    "ACCESS_TOKEN_SECRET": token,
    "Content-Type": "application/json",
  },
});

export default http;