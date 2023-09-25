import { axiosService } from '@/services/axios-service';
import { API_USERS_PATH as PATH } from '@/consts';
import { IUserProfile } from '@/shared/interfaces';

export const userService = {
  getProfile: async () => {
    return await axiosService()
      .get<IUserProfile>(PATH + '/profile')
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return null;
      });
  },
};
