import { ProductMaintainer } from '@/products';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Product List',
  description: 'list of products',
};

export default async function PokemonPage() {
  
  return (
    <div className="flex flex-col p-5">
      <span className="text-4xl my-2 mb-10 font-bold">
        Mantenedor de productos
      </span>
      <ProductMaintainer />
    </div>
  );
}
