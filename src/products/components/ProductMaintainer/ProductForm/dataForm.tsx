import * as Yup from 'yup';
import { Product } from '../../../interfaces';

export const disableInputsObject = {
  code: true,
  title: true,
  description: true,
  price: true,
};

export const getParametersValidator = () => {
  const t = (key: string) => key;
  return Yup.object().shape({
    code: Yup.string().required(t('Campo requerido') as string),
    title: Yup.string().required(t('Campo requerido') as string),
    price: Yup.number().required(t('Campo requerido') as string).min(1),
  });
};

export const getPayload = (selectedItem: Product) => {
  const payload: Product = {
    ...selectedItem,
  };
  return payload;
};

export const getFormikValues = (selectedItem: Product) => {
  return {
    ...selectedItem,
  };
};
