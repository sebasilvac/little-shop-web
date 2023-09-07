'use client';

import React from 'react'
import { ProductCard } from './ProductCard'
import { useAppSelector } from '@/store';

export const ProductGrid = () => {
  const productsState = useAppSelector(state => state.products);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {productsState.products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
