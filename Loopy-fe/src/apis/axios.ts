import axios, {
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from 'axios';
import Storage from '../utils/storage';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Storage.getAccessToken();

    if (token) {
      if (typeof config.headers?.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`);
      } else {
        config.headers = {
          ...(config.headers || {}),
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }
    } else {
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (
      status === 401 &&
      message === 'The API key provided was invalid or missing.'
    ) {
      console.error('로그인이 만료되었습니다. 다시 로그인해주세요.');
      Storage.clearStorage();
      window.location.href = '/';
    }

    if (status === 500) {
      console.error('서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }

    return Promise.reject(error.response?.data || error);
  },
);

export default axiosInstance;
