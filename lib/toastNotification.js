import { toast } from 'react-toastify';

export const toastNotification = (type, message, time = 3000) => {
  switch (type) {
    case 'info':
      toast.info(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'success':
      toast.success(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'warn':
      toast.warn(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    default:
      break;
  }
};
