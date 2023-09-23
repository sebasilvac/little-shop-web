'use client';

import { SelectedProduct } from '../interfaces';
import { ProductPickingCard } from './ProductPickingCard';
import { v4 as uuidv4 } from 'uuid';

interface ProductsPickingGridProps {
  selectedProducts: SelectedProduct[]
}

export const ProductPickingGrid = ({ selectedProducts }: ProductsPickingGridProps) => {

  return (
    <div className="flex flex-col items-end justify-end h-full w-full">
      {selectedProducts.map((product) => (
        <ProductPickingCard key={uuidv4()} selectedProduct={product} />
      ))}
    </div>
  );
};
