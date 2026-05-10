import axios from "axios";

// 🔥 Create Axios Instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true,  // Always send cookies
  // headers: {
  //   "Content-Type": "application/json"
  // }
});

// 🔐 Auto Attach Token From LocalStorage / Redux
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =`Bearer ${token}`; 
  }

  return config;
});


// 🌐 GET API
export const getDataAPI = async (url) => {
  const res = await instance.get(`/${url}`);
  return res;
};

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
