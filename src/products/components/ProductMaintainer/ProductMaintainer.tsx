'use client';

import { useAppSelector } from '@/store';
import { ProductDataGrid } from './ProductDataGrid/ProductDataGrid';
import { Product } from '@/products/interfaces';
import { useProducts } from '@/products/hooks';
import { useForms } from '@/hooks';
import { ProductForm, getParametersValidator } from './ProductForm';
import { InputSearch } from './InputSearch/InputSearch';
import { useEffect } from 'react';

export const ProductMaintainer = () => {
  

  const {
    create,
    update,
    defaultValues,
    disabledInputs,
    rowSelected,
    setRowSelected,
    setDisabledInputs,
    updateResults,
    productsState,
  } = useProducts();

  const { formik, handleSubmit, actionForm, setActionForm, isLoading } =
    useForms<Product>({
      initialValues: defaultValues,
      paramsValidator: getParametersValidator(),
      createFn: create,
      updateFn: update,
      disabledInputs: disabledInputs,
      setDisabledInputs: setDisabledInputs,
      pkey: ['id', 'code'],
    });

  return (
    <>
      <div className='flex justify-center items-center w-full'>
        <div className='w-1/2'>
          <ProductForm
            rowSelected={rowSelected}
            setRowSelected={setRowSelected}
            disabledInputs={disabledInputs}
            actionForm={actionForm}
            setActionForm={setActionForm}
            formik={formik}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className='w-3/4'>
          <InputSearch updateResults={updateResults} />
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className="h-80 w-3/4 mt-3 bg-blue-50">
          <ProductDataGrid
            products={productsState.filterdValues}
            setRowSelected={setRowSelected}
            rowSelected={rowSelected}
            formik={formik}
          />
        </div>
      </div>

    </>
  );
};
