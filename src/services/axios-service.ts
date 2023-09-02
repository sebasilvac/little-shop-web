import axios, { AxiosRequestConfig } from 'axios';

const PATH_URL_BASE = 'http://localhost:4000/api'; //TODO: set in .env

if (!PATH_URL_BASE) {
  throw 'PATH_URL_BASE not configure';
}

interface IAxioService {
  data?: any;
  withAuthorization?: boolean;
  sendFile?: boolean;
  getStatusToken?: boolean;
  setModalExpiredSession?: React.Dispatch<React.SetStateAction<boolean>>;
}

const axiosService = (config?: IAxioService) => {
  const { withAuthorization = true } = config ?? {};
  const { sendFile = false } = config ?? {};
  const { getStatusToken = false } = config ?? {};
  const axiosConfig: AxiosRequestConfig = { baseURL: PATH_URL_BASE, ...config };
  if (withAuthorization) {
    axiosConfig.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  if (getStatusToken) {
    axiosConfig.headers = {
      ...axiosConfig.headers,
      'Access-Control-Allow-Origin': PATH_URL_BASE ?? '',
    };
  }

  if (sendFile) {
    axiosConfig.headers = {
      ...axiosConfig.headers,
      'Content-Type':
        'multipart/form-data; boundary=<calculated when request is sent>',
    };
  }

  const axiosInstance = axios.create(axiosConfig);

  axiosInstance?.interceptors.response.use(undefined, (error) => {
    if (
      error.config &&
      error.response?.status === 401 && // Use the status code your server returns when token has expired
      !error.config.__isRetry
    ) {
      // TODO : Mostrar Modal "Su sesion ha expirado.  Desea volver a activarla?"
      // Si el cliente confirma que SI

      localStorage.setItem('TOKEN_EXPIRADO', 'SI');

      // Si el cliente confirma que no hace logout
      // window.location.href = `${VITE_API_URL_BASE}/logout?token=${localStorage.getItem(
      //   'token',
      // )}`;
    }
  });

  return axiosInstance;
};

export { axiosService };
