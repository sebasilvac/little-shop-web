import { useSnackbar } from 'notistack';

export enum TypeMessages {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

export interface NotificationParams {
  message: string;
  type?: TypeMessages | null;
  timeout?: number | null;
}

// el retorno dependerá de la librería de notificaciones que se decida usar
const typeMessageMap = (type: string) => {
  switch (type) {
    case TypeMessages.success:
      return 'success';
    case TypeMessages.error:
      return 'error';
    case TypeMessages.info:
      return 'info';
    case TypeMessages.warning:
      return 'warning';
    default:
      return 'default';
  }
};

const useNotifications = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const closeAction = (snackbarId: string) => {
    return (
      <div
        className="cursor-pointer mr-2"
        onClick={() => closeSnackbar(snackbarId)}
      >
        <svg
          height="12px"
          id="Layer_1"
          version="1.1"
          fill="#fff"
          viewBox="0 0 512 512"
          width="12px"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
        </svg>
      </div>
    );
  };

  const sendNotification = ({ message, type }: NotificationParams) => {
    enqueueSnackbar(message, {
      variant: typeMessageMap(type ?? 'default'),
      action: closeAction as any,
    });
  };

  const successNotification = (
    message: string,
    timeout: number | null = 5000,
  ) => {
    enqueueSnackbar(message, {
      variant: typeMessageMap('success'),
      action: closeAction as any,
      autoHideDuration: timeout,
    });
  };

  const infoNotification = (message: string) => {
    enqueueSnackbar(message, {
      variant: typeMessageMap('info'),
      action: closeAction as any,
    });
  };

  const errorNotification = (
    message: string,
    timeout: number | null = 5000,
  ) => {

    console.log('errorNotification', message)

    enqueueSnackbar(message, {
      variant: typeMessageMap('error'),
      action: closeAction as any,
      autoHideDuration: timeout,
    });
  };

  const warningNotification = (
    message: string,
    timeout: number | null = 5000,
  ) => {
    enqueueSnackbar(message, {
      variant: typeMessageMap('warning'),
      action: closeAction as any,
      autoHideDuration: timeout,
    });
  };

  return {
    sendNotification,
    successNotification,
    infoNotification,
    errorNotification,
    warningNotification,
    closeAction,
  };
};

export default useNotifications;
