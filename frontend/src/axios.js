import axios from "axios";

const instance = axios.create({
  baseURL: 'https://673876654eb22e24fca800c5.mockapi.io', // Ваш URL MockAPI
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
