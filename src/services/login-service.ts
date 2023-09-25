import { axiosService } from '@/services/axios-service';
import { API_LOGIN_PATH as PATH } from '@/consts';
import { ILogin, ILoginResponse } from '@/shared/interfaces';

export const loginService = {
  login: async (payload: ILogin) => {
    return await axiosService()
      .post<ILoginResponse>(PATH, payload)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return null;
      });
  },
};
