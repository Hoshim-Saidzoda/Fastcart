import axios from "axios";

export const API = import.meta.env.VITE_APP_API || "http://37.27.29.18:8002";
export const IMG_API = import.meta.env.VITE_APP_API_IMG_ || API;

export const axiosRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const apiInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

export function saveToken(token) {
  localStorage.setItem("token", token);
  axiosRequest.defaults.headers.Authorization = `Bearer ${token}`;
}

export function removeToken() {
  localStorage.removeItem("token");
  delete axiosRequest.defaults.headers.Authorization;
}

export default apiInstance;
