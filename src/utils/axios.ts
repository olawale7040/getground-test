import axios from 'axios';

const baseURL = 'http://nyx.vima.ekt.gr:3000';
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
    config.baseURL = baseURL;
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            error.response || { data: { message: 'Something went wrong' } }
        )
);

export default axiosInstance;
