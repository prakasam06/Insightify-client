import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.MODE == "development"
      ? "http://localhost:8000/api/v1/"
      : "http://10.1.76.125:8000/api/v1/",
  withCredentials: true,
  responseType: "json",
});

export default instance;
