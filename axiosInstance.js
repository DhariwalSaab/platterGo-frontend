import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

instance.interceptors.request.use(async (config) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  } catch (error) {
    console.log("request error ", error);
  }
});

instance.interceptors.response.use(
  (response) => {
    console.log("Response data:", response.data);
    return response;
  },
  (error) => {
    console.error("response error", error);
    if (error.response.status === 401) {
      console.log("unauthrized error , redirect to Login...");
    }
  }
);
export default instance;
