import { useState } from 'react';
import { Product } from '../interfaces';

const defaultValues: Product = {
  id: '',
  code: '',
  title: '',
  description: '',
  price: 0,
};

const disabledInputs = {
  code: false,
  title: false,
  description: false,
  price: false,
};

const useProducts = () => {
  const [rowSelected, setRowSelected] = useState<Product>(defaultValues);
  
  const create = async () => {
    console.log('CREATE Not implemented yet...');
    return;
  };

  const update = async () => {
    console.log('UPDATE Not implemented yet...');
    return;
  };

  return {
    create,
    update,
    defaultValues,
    disabledInputs,
    rowSelected,
    setRowSelected,
  };
};

export default useProducts;
