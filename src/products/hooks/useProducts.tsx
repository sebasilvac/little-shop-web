import { useEffect, useState } from 'react';
import { Product } from '../interfaces';
import { useDispatch } from 'react-redux';
import { setFilteredValues, setProducts } from '@/store/slices/products';
import { productService as Service } from '@/services';
import { useAppSelector } from '@/store';

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
  const productsState = useAppSelector((state) => state.products);
  const dispatch = useDispatch();
  const [rowSelected, setRowSelected] = useState<Product>(defaultValues);
  const [disabledInputs, setDisabledInputs] = useState(defaultDisabledInputs);

  useEffect(() => {
    // seleccionamos un elemento en la lista de productos
    if(productsState.filterdValues.length === 0) return;
    const exist = productsState.filterdValues.find( (product) => product.id === rowSelected.id );
    
    if(!exist){
      setRowSelected(productsState.filterdValues[0]);
    }
  }, [productsState.filterdValues]);

  
  const create = async (payload: Product) => {
    const results = await Service.create({
      ...payload,
      price: Number(payload.price),
    });

    if (!results) {
      return results;
    }

    dispatch(setFilteredValues([...productsState.filterdValues, results]));
    dispatch(setProducts([...productsState.filterdValues, results]));

    return results;
  };

  const update = async (payload: Product) => {
    return await Service.update(payload.id, {
      code: payload.code,
      title: payload.title,
      description: payload.description,
      price: Number(payload.price),
    });
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
    productsState,
  };
};

export default useProducts;
