'use client';

import React from 'react';
import { useAppSelector } from '@/store';
import { ProductDataGrid } from './ProductDataGrid/ProductDataGrid';

export const ProductMaintainer = () => {
  const productsState = useAppSelector((state) => state.products);

  return (
    <>
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
          productoSelccionado={1}
        />
      </div>

      {/* <div className="flex flex-wrap gap-10 items-center justify-center">
        {productsState.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </>
  );
};
