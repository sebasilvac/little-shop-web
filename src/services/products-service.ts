import { axiosService } from '@/services/axios-service';

import {
  Product as APIResponse, UpdateProductPayload,
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
  update: async (id:string, payload: UpdateProductPayload) => {
    return await axiosService()
      .patch<APIResponse>(`${PATH}/${id}`, payload)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
        return null;
      });
  },
};
