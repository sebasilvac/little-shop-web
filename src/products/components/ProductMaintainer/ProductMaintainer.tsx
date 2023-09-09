'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import { ProductDataGrid } from './ProductDataGrid/ProductDataGrid';
import { useDispatch } from 'react-redux';
import { Product } from '@/products/interfaces';
import { getParametersValidator } from './dataForm';
import { useProducts } from '@/products/hooks';
import { useForms } from '@/hooks';
import { ProductForm } from './ProductForm';

export const ProductMaintainer = () => {
  const dispatch = useDispatch();
  const productsState = useAppSelector((state) => state.products);

  const {
    create,
    update,
    defaultValues,
    disabledInputs,
    rowSelected,
    setRowSelected,
  } = useProducts();

  const { formik, handleSubmit, actionForm, setActionForm, isLoading } =
    useForms<Product>({
      initialValues: defaultValues,
      paramsValidator: getParametersValidator(),
      createFn: create,
      updateFn: update,
    });

  return (
    <>
      <div>
        <ProductForm
          rowSelected={rowSelected}
          disabledInputs={disabledInputs}
          actionForm={actionForm}
          setActionForm={setActionForm}
          formik={formik}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>

      <div
        className="h-1/4 bg-blue-50"
        style={{
          height: 400,
          width: '80%',
          maxWidth: '70vw',
          margin: '0 auto',
        }}
      >
        <ProductDataGrid
          products={productsState.products}
          setRowSelected={setRowSelected}
        />
      </div>
    </>
  );
};
