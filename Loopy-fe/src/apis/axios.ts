import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, data } = error.response || {};

    if (status === 500) {
      alert("서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }

    return Promise.reject(data);
  }
);

export default axiosInstance;

