import { Product } from '../interfaces';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, title } = props.product;

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
