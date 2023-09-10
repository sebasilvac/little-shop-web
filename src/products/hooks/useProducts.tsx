import { useState } from 'react';
import { Product } from '../interfaces';
import { useDispatch } from 'react-redux';
import { setFilteredValues } from '@/store/slices/products';
import { productService as Service } from '@/services';

const defaultValues: Product = {
  id: '',
  code: '',
  title: '',
  description: '',
  price: 0,
};

const defaultDisabledInputs = {
  id: true,
  code: true,
  title: true,
  description: true,
  price: true,
};

const useProducts = () => {
  const dispatch = useDispatch();
  const [rowSelected, setRowSelected] = useState<Product>(defaultValues);
  const [disabledInputs, setDisabledInputs] = useState(defaultDisabledInputs);
  
  const create = async (payload: Product) => {
    // call service create product
    Service.create(payload);
    
    return;
  };

  const update = async () => {
    console.log('UPDATE Not implemented yet...');
    return;
  };

  const updateResults = (products: Product[]) => {
    dispatch(setFilteredValues(products))
    return;
  };

  return {
    create,
    update,
    defaultValues,
    disabledInputs,
    setDisabledInputs,
    rowSelected,
    setRowSelected,
    updateResults,
  };
};

export default useProducts;
