import { ProductGrid, ProductMaintainer } from '@/products';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Product List',
  description: 'list of products',
};

export default async function PokemonPage() {
  
  return (
    <div className="flex flex-col p-5">
      <span className="text-5xl my-2 mb-10">
        Listado de productos
      </span>
      <ProductMaintainer />
    </div>
  );
}
