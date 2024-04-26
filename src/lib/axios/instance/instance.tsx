import axios from "axios";
import toast from "react-hot-toast";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status >= 400) {
      console.log("error");
      toast.error(error.response.data);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
