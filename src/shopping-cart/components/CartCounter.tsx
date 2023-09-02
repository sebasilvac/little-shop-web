'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { decrement, increment, initCounterState } from '@/store/slices/counter';
import { useEffect } from 'react';

interface CartCounterProps {
  value: number;
}

export interface CounterResponse {
  count: number;
}

const getAPICounter = async (): Promise<CounterResponse>  => {
  return await fetch('/api/counter').then((res) => res.json());
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAPICounter().then((res) => {
      dispatch(initCounterState(res.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex item-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="flex item-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
