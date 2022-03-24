import { toast } from 'react-toastify';

export function toastError(message) {
  return toast.error(message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    progress: undefined,
    className: 'toastStyle',
  });
}

export function toastSuccess(message) {
  return toast.success(message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    closeButton: false,
    draggable: true,
    progress: undefined,
    className: 'toastStyle',
  });
}
