import axios from "axios";

const DEFAULT_BASE_URL = import.meta.env.VITE_BASE_URL;
const DEFAULT_TIMEOUT = import.meta.env.VITE_TIMEOUT || 5000; // 5 segundos por defecto
console.log(`BASE_URL: ${DEFAULT_BASE_URL}, TIMEOUT: ${DEFAULT_TIMEOUT}`);

const axiosInstance = axios.create({
  baseURL: DEFAULT_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
