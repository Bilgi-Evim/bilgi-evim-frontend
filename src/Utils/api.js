import axios from "axios";

const createApiInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

const adminApi = createApiInstance(process.env.REACT_APP_ADMIN_URL);
const teacherApi = createApiInstance(process.env.REACT_APP_TEACHER_URL);
const studentApi = createApiInstance(process.env.REACT_APP_STUDENT_URL);

export { adminApi, teacherApi, studentApi };
