
import axios from "axios";

// 🔥 Create Axios Instance
const instance = axios.create({
  // Automatically routes to Vercel in production, and localhost during local testing
  baseURL: import.meta.env.PROD 
    ? "https://covianlab-backend.vercel.app/api" 
    : "http://localhost:5000/api",
  withCredentials: true,
});

// 🔐 Auto Attach Token From LocalStorage / Redux
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }

  return config;
});

// ... rest of your API functions

// 🌐 POST API
export const postDataAPI = async (url, data) => {
  const res = await instance.post(`/${url}`, data);
  return res;
};

// 🌐 PUT API
export const putDataAPI = async (url, data) => {
  const res = await instance.put(`/${url}`, data);
  return res;
};

// 🌐 PATCH API
export const patchDataAPI = async (url, data) => {
  const res = await instance.patch(`/${url}`, data);
  return res;
};

// 🌐 DELETE API
export const deleteDataAPI = async (url) => {
  const res = await instance.delete(`/${url}`);
  return res;
};
