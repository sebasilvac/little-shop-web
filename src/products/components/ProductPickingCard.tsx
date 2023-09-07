import { SelectedProduct } from '../interfaces';

interface ProductCardProps {
  selectedProduct: SelectedProduct;
}

export const ProductPickingCard = (props: ProductCardProps) => {
  const { id, title, quantity, price, total } = props.selectedProduct;

  return (
    <>
      <div className="mt-2 w-full">
        <div className="rounded overflow-hidden shadow-lg flex flex-row text-text-5xl">

          <div className="px-3 py-4 flex flex-row w-full">
            <div className='basis-2/3 flex flex-row'>
              <div className="basis-2/3 pt-2 text-3xl font-semibold text-gray-500 uppercase">
                {title}
              </div>

              <div className="basis-1/3 pt-2 text-3xl font-semibold text-gray-500 mx-2 flex flex-col justify-end items-end">
                {quantity} x {price}
              </div> 
            </div>
            
            <div className="basis-1/3 pt-2 text-3xl font-semibold text-gray-500 flex items-end justify-end w-full">
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
