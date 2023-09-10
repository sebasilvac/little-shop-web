import { axiosService } from '@/services/axios-service';

import {
  Product as APIResponse,
} from '@/products/interfaces';


import { API_PRODUCTS_PATH as PATH } from '@/consts';

export const productService = {
  getAll: async () => {
    return await axiosService()
      .get<APIResponse[]>(PATH)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  },
  create: async (payload: APIResponse) => {
    return await axiosService()
      .post<APIResponse>(PATH, payload)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return null;
      });
  },
  update: async (payload: APIResponse) => {
    return await axiosService()
      .put<APIResponse>(`${PATH}/${payload.id}`, payload)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return null;
      });
  },
};
