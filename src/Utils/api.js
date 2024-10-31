import axios from "axios";
import tokenManager from "../Utils/tokenManager";
import notificationService from "../Services/notificationService";

const createApiInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = tokenManager.getToken();

      if (token) {
        if (tokenManager.isTokenExpired()) {
          notificationService.info("Oturum süreniz doldu, lütfen yeniden giriş yapınız.");

          tokenManager.clearToken();

          setTimeout(() => {
            window.location.href = "/home";
          }, 1500);
          
          return Promise.reject("Token süresi doldu. Yeniden giriş yapınız.");
        }
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
