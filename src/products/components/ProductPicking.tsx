'use client';

import { useEffect, useRef, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

import { useKeyActions } from '@/products/hooks';
import { useAppSelector } from '@/store';
import { ProductPickingGrid } from './ProductPickingGrid';

export const ProductPicking = () => {
  const [inputValue, setInputValue] = useState('');
  const inputScan = useRef<HTMLInputElement>();
  const productsState = useAppSelector((state) => state.products);

  const { mode: modeForm, handleKeyPress, pickProduct } = useKeyActions();

  useEffect(() => {
    inputScan.current?.focus();
  },[]); 

  useEffect(() => {
    console.log('MODE:', modeForm);
  }, [modeForm]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      0: { value: string };
    };

    const value = target[0].value;
    setInputValue('');

    // comprobar si existe el producto
    const product = productsState.products.find(
      (product) => product.code === value,
    );

    if (!product) {
      console.log('PRODUCT NOT FOUND');
      return;
    }

    pickProduct(product);
  };

  const restoreFocus = () => {
    inputScan.current?.focus();
  };

  const style = {
    add: {
      backgroundColor: 'rgba(50, 200, 50, .5)',
    },
    delete: {
      backgroundColor: 'rgba(200, 50, 50, .5)',
    },
  };


  return (
    <>
      <div className="px-3 mb-6 w-full h-full" onClick={restoreFocus}>
        {productsState.selectedProducts.length === 0 ? (
          <NoProducts />
        ) : (
          <ProductPickingGrid selectedProducts={productsState.selectedProducts} />
        )}
      </div>
      
      <div className='px-3 mb-6 w-full flex flex-row justify-end text-5xl text-red-600 font-bold'>
        TOTAL: { productsState.selectedProducts.reduce((acc, product) => acc + product.total, 0) }
      </div>


      <div className="w-full mt-5" onKeyUp={handleKeyPress}>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap w-full">
            <div className={`w-full bg-red-700 px-2 p-2 text-end`} style={style[modeForm]}>
              <input
                ref={inputScan as any}
                autoFocus
                type="number"
                style={{ textAlign: 'end' }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 my-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="pick product"
                name="pickproduct"
                autoComplete="false"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export const NoProducts = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay productos</span>
    </div>
  );
};
