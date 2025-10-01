import axios from "axios";

const DEFAULT_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api";
const DEFAULT_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT ?? 5000);

const axiosInstance = axios.create({
  baseURL: DEFAULT_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
