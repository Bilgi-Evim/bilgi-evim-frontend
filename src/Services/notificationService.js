import { toast } from "react-toastify";

const notificationService = {
  success: (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      className: "toast-message",
      pauseOnHover: false,
    });
  },
  error: (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      className: "toast-message",
      pauseOnHover: false,
    });
  },
  info: (message) =>{
    toast.info(message,{
      position:"top-center",
      autoClose:1500,
      className:"toast-message",
      pauseOnHover: false
    })
  }
};

export default notificationService;
